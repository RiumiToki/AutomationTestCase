import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('textbox', { name: 'User code or email *' }).fill('Demoneuron');
await page.getByRole('textbox', { name: 'Password *' }).fill('standar');
await page.getByRole('button', { name: 'Login' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/index');
await page.getByRole('button', { name: '  Reporting' }).click();
await page.locator('#mnu_reporting').getByRole('button', { name: '  Attendance' }).click();
await page.getByRole('link', { name: ' Dashboard Attendance HR' }).click();
await page.goto('https://hcms-web-ohc-hcms-dev.apps.ocp-dev.pegadaian.co.id/attendance/dashboard/reporting-hr?start_date=16+September+2025&end_date=15+October+2025&interval_monitoring_att=6');
await page.getByRole('link', { name: ' Unduh' }).click();
await expect(page.getByText('% Data :50/12423')).toBeVisible();
});