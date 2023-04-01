import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform?usp=send_form');
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform');
  await page.getByRole('listbox', { name: 'Year of Study Required question' }).getByRole('option', { name: 'Choose' }).click();
  await page.getByText('Y2').nth(2).click();
  await page.getByText('Y3').click();
  await page.getByText('Y4').click();
  await page.getByRole('radio', { name: 'WUDC Madrid', exact: true }).click();
  await page.locator('div').filter({ hasText: 'ABP Bali' }).nth(1).click();
  await page.getByText('Both WUDC Madrid and ABP Bali').click();
  await page.getByRole('listbox', { name: 'Position Veto(Pick one only) Required question' }).getByRole('option', { name: 'Choose' }).click();
  await page.getByText('DLO').click();
  await page.getByText('GW').click();
  await page.getByText('MG').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('option', { name: 'MO' }).click();
});