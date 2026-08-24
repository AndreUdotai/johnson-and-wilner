import { defineConfig, devices } from '@playwright/test';
import { config as loadEnv } from 'dotenv';
import path from 'path';

// Load local test/app configuration (BASE_URL, email credentials, etc.).
loadEnv({ path: path.resolve(__dirname, '.env') });

const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';

/**
 * Playwright configuration for Johnson & Wilner LLP
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // We keep only Chromium for now so tests run fast while learning.
    // Later we can re-enable Firefox and WebKit.
  ],

  /* Automatically start the Express server before tests */
  webServer: {
    command: 'npm run start',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});