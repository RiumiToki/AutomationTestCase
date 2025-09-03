import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Entities' }).click();
await page.getByRole('button', { name: 'Buat baru' }).click();
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('Kolom ini diperlukan.')).toBeVisible();
});