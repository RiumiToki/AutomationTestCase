import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email' }).click();
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).click();
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Organization' }).click();
await page.getByRole('link', { name: ' Manage Position Quota' }).click();
await page.locator('#rows-1').fill('90');
await page.getByRole('button', { name: 'Simpan perubahan' }).click();
await expect(page.getByText('#Notiflix-Icon-Success{fill:rgba(0,0,0,0.2)}Success update quota')).toBeVisible();
await expect(page.locator('#rows-1')).toBeVisible();
});