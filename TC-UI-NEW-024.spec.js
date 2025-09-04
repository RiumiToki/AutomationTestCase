import { test } from '@playwright/test';

test('test', async ({ page }) => {
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Roles' }).click();
await page.getByRole('row', { name: '40 PMS Admin Divisi PMS Admin' }).getByRole('link').nth(2).click();
await page.getByRole('listitem').filter({ hasText: 'Tambah Orang Off lihat rubah' }).locator('label').nth(4).click();
await page.getByRole('listitem').filter({ hasText: 'Tambah Karyawan Off lihat' }).locator('label').nth(4).click();
await page.getByRole('listitem').filter({ hasText: 'Access kanwil X Off lihat' }).locator('label').nth(4).click();
await page.getByRole('button', { name: 'Simpan' }).click();
});