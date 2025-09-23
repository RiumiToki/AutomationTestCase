import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Manage Employee' }).click();
await page.getByRole('row', { name: 'P11170 (P632511170) TEGUH' }).getByRole('button').nth(2).click();
await page.getByRole('link', { name: '  Pengaturan Golongan' }).click();
await expect(page.getByText('Buat baru Definitif lainnya Tipe GolonganTipe pekerjaanTanggal MulaiTanggal')).toBeVisible();
});