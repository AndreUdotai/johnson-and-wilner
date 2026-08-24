import { type Locator, type Page } from "@playwright/test";

/**
 * Page Object for the Home page (`/`).
 * Shared header locators live here so responsive tests stay readable.
 */
export class HomePage {
  readonly page: Page;

  /** Phone / call block in the desktop header (`.pbmit-header-left-area`). */
  readonly headerCallArea: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerCallArea = page.locator(".pbmit-header-left-area");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async setViewportWidth(width: number, height = 900): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }
}
