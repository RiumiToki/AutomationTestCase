import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Contract' }).click();
await page.getByRole('button', { name: '   Buat baru' }).click();
await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
await page.getByRole('treeitem', { name: '[ P691911137 ] SUDARTO' }).click();
await page.locator('#status_id').selectOption('2');
await page.locator('#document_date').click();
await page.getByText('19', { exact: true }).nth(2).click();
await page.locator('#contract_number').fill('91132');
await page.locator('#contract_title').fill('abcddddefg');
await page.locator('#document_desc').fill('keren');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.locator('td:nth-child(9)').first()).toBeVisible();
});