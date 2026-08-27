import { type Locator, type Page } from "@playwright/test";
import type { ContactFormData } from "../data/contact.data";
import { logger } from "../utils/logger";

/**
 * Page Object for the Contacts page (`/contacts`).
 *
 * Locators are scoped to `.contact-form` so they never collide with the
 * homepage appointment form, which uses different placeholders.
 *
 * The form fields have no associated <label> elements, so placeholders
 * are the most resilient accessible hook available in the current markup.
 */
export class ContactPage {
  readonly page: Page;
  readonly form: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  /** Inline confirmation expected immediately below the <form>. */
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    const contactForm = page.locator(".contact-form");
    this.form = contactForm.locator("form");

    this.nameInput = contactForm.getByPlaceholder("Your Name");
    this.emailInput = contactForm.getByPlaceholder("Your Email");
    this.phoneInput = contactForm.getByPlaceholder("Phone Number");
    this.subjectInput = contactForm.getByPlaceholder("Subject");
    this.messageInput = contactForm.getByPlaceholder("Your Message");
    this.submitButton = contactForm.getByRole("button", {
      name: /send message/i,
    });

    // The success copy should render as a sibling just below the <form>.
    // `~ *` matches any following sibling of the form inside `.contact-form`.
    this.successMessage = this.form
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
    logger.info("Navigating to /contacts");
    await this.page.goto("/contacts");
    await this.form.waitFor({ state: "visible" });
  }

  async fillForm(data: ContactFormData): Promise<void> {
    logger.info("Filling the contact form");
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  async submit(): Promise<void> {
    logger.info("Submitting the contact form");
    await this.submitButton.click();
  }

  /** Fill every field and click Send Message. */
  async submitForm(data: ContactFormData): Promise<void> {
    await this.fillForm(data);
    await this.submit();
  }
}
