import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('menuitem', { name: '  Konfigurasi' }).getByRole('button').click();
await page.locator('#mnu_config_menu').getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Category' }).click();
await page.getByRole('link', { name: ' Saring' }).click();
await page.getByRole('textbox', { name: 'Valid' }).click();
await page.getByRole('option', { name: 'Invalid' }).click();
await page.getByRole('button', { name: ' Saring' }).click();
await page.getByRole('button', { name: '' }).nth(1).click();
await page.locator('#end_date').click();
await page.getByText('27').nth(1).click();
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('#Notiflix-Icon-Success{fill:rgba(0,0,0,0.2)}Berhasil menyimpan kategori')).toBeVisible();
});