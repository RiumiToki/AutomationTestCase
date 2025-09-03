import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Roles' }).click();
await page.getByRole('row', { name: 'Admin Role for admin admin' }).getByRole('link').first().click();
await page.getByRole('textbox', { name: 'Nama' }).fill('Admin123');
await page.getByRole('textbox', { name: 'Kode Peran Deskripsi*' }).fill('admin123');
await page.getByRole('textbox', { name: 'Deskripsi', exact: true }).fill('Role for admin123');
await page.getByRole('button', { name: 'Simpan ' }).click();
await expect(page.getByText('×Sukses mengupdate peran')).toBeVisible();
});