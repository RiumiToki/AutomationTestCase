import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Users & Access' }).click();
await expect(page.getByRole('link', { name: ' Manage Entities' })).toBeVisible();
await expect(page.getByRole('link', { name: ' Manage Roles' })).toBeVisible();
await expect(page.getByRole('link', { name: ' Manage Users' })).toBeVisible();
await page.getByRole('button', { name: '  Profile' }).click();
await page.getByRole('link', { name: ' Keluar' }).click();
await page.getByRole('textbox', { name: 'User code or email *' }).fill('P691911137');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await expect(page.locator('div').filter({ hasText: 'Reimbursement Manage' }).nth(2)).toBeVisible();
});