import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Johnson|Wilner/i);
  });

  test("should display the main navigation links", async ({ page }) => {
    await page.goto("/");

    // Use more precise locators to avoid strict mode violations
    const nav = page.locator("nav, header, .navbar, .main-menu").first();

    await expect(
      nav.getByRole("link", { name: "Home", exact: true }),
    ).toBeVisible();
    await expect(nav.getByRole("link", { name: /about us/i })).toBeVisible();
    await expect(
      nav.getByRole("link", { name: /practice areas/i }),
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: /publications/i }),
    ).toBeVisible();
    await expect(nav.getByRole("link", { name: /contacts/i })).toBeVisible();
  });

  test("should show the firm name in the hero section", async ({ page }) => {
    await page.goto("/");

    // Target the large hero heading specifically
    await expect(
      page.getByRole("heading", { name: "JOHNSON & WILNER LLP", exact: true }),
    ).toBeVisible();
  });
});
