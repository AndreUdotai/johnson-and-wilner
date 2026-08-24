import { test, expect } from "@playwright/test";
import { ContactPage } from "./pages/ContactPage";
import { validContactPayload } from "./data/contact.data";
import { logger } from "./utils/logger";

test.describe("Contact Form", () => {
  test("should show an inline success message after a valid submission", async ({
    page,
  }) => {
    const contactPage = new ContactPage(page);

    await contactPage.goto();
    await contactPage.submitForm(validContactPayload);

    // Expected UX: an inline confirmation just below the form.
    // This assertion is intentionally failing until the feature is implemented.
    try {
      await expect(contactPage.successMessage).toBeVisible();
      await expect(contactPage.successMessage).toHaveText(
        "Message sent successfully!",
      );
      logger.success('Inline success message "Message sent successfully!" is visible');
    } catch (error) {
      logger.error(
        'Did not find inline success message "Message sent successfully!" below the form',
      );
      throw error;
    }
  });
});
