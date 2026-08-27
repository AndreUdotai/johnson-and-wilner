import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { validContactPayload } from "./data/contact.data";
import { logger } from "./utils/logger";

test.describe("Homepage contact form", () => {
  test("should display the homepage contact form fields and send button", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.contactForm).toBeVisible();
    await expect(homePage.contactNameInput).toBeVisible();
    await expect(homePage.contactEmailInput).toBeVisible();
    await expect(homePage.contactPhoneInput).toBeVisible();
    await expect(homePage.contactSubjectInput).toBeVisible();
    await expect(homePage.contactMessageInput).toBeVisible();
    await expect(homePage.contactSubmitButton).toBeVisible();
  });

  test("should stay on the homepage and show an inline success message after submit", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    // Do not send a real email in CI or local test runs.
    await homePage.mockSuccessfulSubmit();
    await homePage.goto();
    await homePage.submitContactForm(validContactPayload);

    // Submit must not send the visitor to /contact or /contacts.
    expect(new URL(page.url()).pathname).toBe("/");
    await expect(page).not.toHaveURL(/\/contacts(?:\/|\?|$)/i);

    try {
      await expect(homePage.contactSuccessMessage).toBeVisible();
      await expect(homePage.contactSuccessMessage).toHaveText(
        "Message sent successfully!",
      );
      logger.success(
        'Homepage inline success message "Message sent successfully!" is visible',
      );
    } catch (error) {
      logger.error(
        'Did not find inline success message "Message sent successfully!" below the homepage form',
      );
      throw error;
    }
  });
});
