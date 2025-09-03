import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
  await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
  await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
  await page.getByRole('button', { name: '  Users & Access' }).click();
  await page.getByRole('link', { name: ' Manage Users' }).click();
  await page.getByRole('link', { name: ' Show Filter' }).click();
  await page.getByLabel('Search', { exact: true }).selectOption('5');
  await page.getByRole('button', { name: ' Apply' }).click();
  await expect(page.getByRole('gridcell', { name: 'Locked' }).first()).toBeVisible();
});