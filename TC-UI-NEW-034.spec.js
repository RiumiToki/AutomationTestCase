import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Employee' }).click();
await page.getByRole('link', { name: ' Employee SK' }).click();
await page.getByRole('link', { name: '   Buat baru' }).click();
await page.locator('#form-employee div').filter({ hasText: 'Pegawai *' }).getByLabel('').click();
await page.getByRole('treeitem', { name: '[ P652011139 ] RINI WIDYANTINI' }).click();
await page.locator('#form-employee div').filter({ hasText: 'Person Grade *' }).locator('b').click();
await expect(page.getByRole('treeitem', { name: 'Grade 4' })).toBeVisible();
});