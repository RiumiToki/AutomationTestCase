import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Calendar' }).click();
await page.getByRole('link', { name: ' Period' }).click();
await page.getByText('Buat baru').click();
await page.getByLabel('Tipe Periode *').selectOption('1');
await page.locator('#description').fill('Gaji');
await page.getByRole('textbox', { name: 'Tanggal Mulai' }).click();
await page.getByText('7', { exact: true }).first().click();
await page.locator('.col-sm-6.pl-sm-1').first().click();
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.locator('td:nth-child(2)').first()).toBeVisible();
});