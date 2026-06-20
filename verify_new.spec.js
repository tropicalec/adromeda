import { test, expect } from '@playwright/test';

test('verify expanded content', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for animations
  await page.waitForTimeout(2000);

  // Check Hero
  await expect(page.locator('h1')).toContainText('Meta & Google Ads');
  await page.screenshot({ path: 'verification/hero_new.png' });

  // Scroll to Method
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/method.png' });

  // Scroll to FAQ
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/faq.png' });
});
