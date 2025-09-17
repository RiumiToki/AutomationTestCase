import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('P711711130');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/addon/organization/pegadaian/manage/position');
await expect(page.getByText('Manage jabatanAnda dapat')).toBeVisible();
});