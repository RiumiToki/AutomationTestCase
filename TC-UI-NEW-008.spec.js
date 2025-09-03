import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ess-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: '  Users & Access' }).click();
await page.getByRole('link', { name: ' Manage Users' }).click();
await page.getByRole('button', { name: ' Create New' }).click();
await page.getByRole('textbox', { name: 'Kode * Deskripsi* *' }).fill('Bakmienek');
await page.getByRole('textbox', { name: 'Nama *' }).fill('EmgEnak');
await page.getByRole('textbox', { name: 'Surel *' }).fill('Bakmieayam@pegadaian.co.id');
await page.getByRole('button', { name: 'Simpan' }).click();
await expect(page.getByText('×OK')).toBeVisible();
});