import { type Locator, type Page } from "@playwright/test";
import type { ContactFormData } from "../data/contact.data";
import { logger } from "../utils/logger";

/**
 * Page Object for the Home page (`/`).
 * Shared header locators live here so responsive tests stay readable.
 */
export class HomePage {
  readonly page: Page;

  /** Phone / call block in the desktop header (`.pbmit-header-left-area`). */
  readonly headerCallArea: Locator;

  /** Homepage appointment contact form (`.appoinment-eight form.form-style-1`). */
  readonly contactForm: Locator;
  readonly contactNameInput: Locator;
  readonly contactEmailInput: Locator;
  readonly contactPhoneInput: Locator;
  readonly contactSubjectInput: Locator;
  readonly contactMessageInput: Locator;
  readonly contactSubmitButton: Locator;
  /** Inline confirmation expected immediately below the homepage <form>. */
  readonly contactSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerCallArea = page.locator(".pbmit-header-left-area");

    const contactForm = page.locator(".appoinment-eight form.form-style-1");
    this.contactForm = contactForm;
    this.contactNameInput = contactForm.getByPlaceholder("Name", { exact: true });
    this.contactEmailInput = contactForm.getByPlaceholder("Email", {
      exact: true,
    });
    this.contactPhoneInput = contactForm.getByPlaceholder("Phone", {
      exact: true,
    });
    this.contactSubjectInput = contactForm.getByPlaceholder("Subject", {
      exact: true,
    });
    this.contactMessageInput = contactForm.getByPlaceholder("Message", {
      exact: true,
    });
    this.contactSubmitButton = contactForm.getByRole("button", {
      name: /send message/i,
    });

    // The success copy should render as a sibling just below the <form>.
    this.contactSuccessMessage = this.contactForm
      .locator("~ *")
      .getByText("Message sent successfully!", { exact: true });
  }

  /**
   * Stub POST /contact so Playwright never hits Nodemailer / Gmail.
   * The UI still receives the same JSON success payload as production.
   */
  async mockSuccessfulSubmit(): Promise<void> {
    await this.page.route("**/contact", async (route) => {
      const url = new URL(route.request().url());
      if (route.request().method() !== "POST" || url.pathname !== "/contact") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Message sent successfully!",
        }),
      });
    });
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async setViewportWidth(width: number, height = 900): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async fillContactForm(data: ContactFormData): Promise<void> {
    logger.info("Filling the homepage contact form");
    await this.contactNameInput.fill(data.name);
    await this.contactEmailInput.fill(data.email);
    await this.contactPhoneInput.fill(data.phone);
    await this.contactSubjectInput.fill(data.subject);
    await this.contactMessageInput.fill(data.message);
  }

  async submitContactForm(data: ContactFormData): Promise<void> {
    await this.fillContactForm(data);
    logger.info("Submitting the homepage contact form");
    await this.contactSubmitButton.click();
  }
}
