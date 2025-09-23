import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Manage Employee' }).click();
await page.getByRole('button', { name: '' }).first().click();
await expect(page.getByRole('textbox', { name: 'Tanggal Bergabung' })).toBeVisible();
await expect(page.getByRole('textbox', { name: 'Tanggal Berakhir' })).toBeVisible();
}); 