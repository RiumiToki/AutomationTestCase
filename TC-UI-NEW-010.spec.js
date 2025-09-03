import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Entities' }).click();
await page.getByRole('button', { name: 'Buat baru' }).click();
await page.getByRole('textbox', { name: 'Kode Entitas' }).fill('Mieayam');
await page.getByLabel('Jenis Entitas', { exact: true }).selectOption('3');
await page.getByLabel('Induk', { exact: true }).selectOption('access_kanwil_II');
await page.getByRole('textbox', { name: 'Nama' }).fill('EnakBaget');
await page.getByRole('textbox', { name: 'Deskripsi' }).fill('Murah');
await page.getByRole('textbox', { name: 'Referensi' }).fill('orang keren');
await page.getByLabel('Grup', { exact: true }).selectOption('Third Party');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('×Sukses')).toBeVisible();
});