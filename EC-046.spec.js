import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Contract' }).click();
await page.getByRole('button', { name: '   Buat baru' }).click();
await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
await page.getByRole('treeitem', { name: '[ P632511170 ] TEGUH WAHYONO' }).click();
await page.locator('#start_date').click();
await page.locator('#datepickers-container').getByText('1', { exact: true }).first().click();
await page.locator('#document_date').click();
await page.locator('#datepickers-container').getByText('1', { exact: true }).nth(3).click();
await page.locator('#contract_number').fill('9119119');
await page.locator('#contract_title').fill('QA Test');
await page.locator('#document_desc').fill('Untuk test automation');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('#Notiflix-Icon-Success{fill:rgba(0,0,0,0.2)}Berhasil membuat contract')).toBeVisible();
});