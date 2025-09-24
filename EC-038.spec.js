import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('menuitem', { name: '  Konfigurasi' }).getByRole('button').click();
await page.locator('#mnu_config_menu').getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Attribute Type' }).click();
await page.getByRole('button', { name: '' }).first().click();
await page.locator('#attr_type_value_id').selectOption('2');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('Berhasil menyimpan tipe')).toBeVisible();
});