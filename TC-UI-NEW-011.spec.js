import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Users' }).click();
await page.getByRole('button', { name: ' Create New' }).click();
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.locator('#code-error')).toBeVisible();
await expect(page.locator('#name-error')).toBeVisible();
await expect(page.locator('#email-error')).toBeVisible();
});