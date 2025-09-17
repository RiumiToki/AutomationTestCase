import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Organization' }).click();
await page.getByRole('link', { name: ' Manage Attribute' }).click();
await page.getByRole('button', { name: 'Buat baru' }).click();
await page.locator('#org_attr_code').fill('123');
await page.locator('#org_attr_name').fill('Prio 1');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByRole('gridcell', { name: '123' })).toBeVisible();
});
