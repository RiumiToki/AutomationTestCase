import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).click();
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).click();
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Payroll' }).click();
await page.getByRole('button', { name: '  Generate & Upload' }).click();
await page.getByRole('link', { name: ' Manual Generator' }).click();
await page.getByRole('textbox', { name: 'Pilih Periode' }).click();
await page.getByRole('option', { name: '2026-' }).click();
await page.getByRole('textbox', { name: 'Pilih Model Penggajian' }).click();
await page.getByRole('option', { name: 'SLIP GAJI KARYAWAN IREGULAR' }).click();
await page.getByRole('list').filter({ hasText: /^$/ }).click();
await page.getByRole('option', { name: '[ P78623 ] SITI AISIAH' }).click();
await page.locator('#schedule_on').click();
await page.getByText('12', { exact: true }).click();
await page.getByRole('button', { name: 'Generate', exact: true }).click();
await expect(page.getByText('#Notiflix-Icon-Failure{fill:rgba(0,0,0,0.2)}Failed, please check form')).toBeVisible();
});