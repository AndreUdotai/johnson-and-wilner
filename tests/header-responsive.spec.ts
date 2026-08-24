import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("Header responsive call element", () => {
  test("should keep the header call element visible at 1400px and hide it below 1200px", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    // 1400px is still desktop. The call block must remain visible here
    // and should only drop away when the header switches to mobile at 1200px.
    await homePage.setViewportWidth(1400);
    await expect(homePage.headerCallArea).toBeVisible();

    // 1199px is just below the 1200px mobile-header breakpoint.
    await homePage.setViewportWidth(1199);
    await expect(homePage.headerCallArea).toBeHidden();
  });
});
