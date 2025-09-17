import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Organization' }).click();
await page.getByRole('link', { name: ' Manage Job' }).click();
await page.getByRole('row', { name: 'LKP gnililek riskaneP' }).getByRole('link').nth(1).click();
await page.getByRole('button', { name: 'Ya' }).click();
await expect(page.getByText('#Notiflix-Icon-Success{fill:rgba(0,0,0,0.2)}gnililek riskaneP berhasil dihapus')).toBeVisible();
});
