import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Manage Employee' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/addon/employee/pegadaian/index/manage');
await page.locator('html').click();
await page.getByRole('row', { name: 'P11170 (P632511170) TEGUH' }).getByRole('button').nth(2).click();
await page.getByRole('link', { name: '  Rincian' }).click();
await page.getByRole('tab', { name: ' Pendidikan sekolah' }).click();
await page.locator('#add-education-formal').click();
await page.getByRole('combobox', { name: 'Choose education level' }).locator('b').click();
await page.getByRole('option', { name: 'Sarjana' }).click();
await page.getByRole('textbox', { name: 'Institusi *' }).fill('Teknik Mie Ayam');
await page.getByRole('textbox', { name: 'Periode * Tanggal * Hasil' }).click();
await page.getByText('2020', { exact: true }).nth(3).click();
await page.getByText('2022', { exact: true }).nth(4).click();
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.locator('.card.h-100 > div')).toBeVisible();
});