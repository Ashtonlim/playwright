import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform?usp=send_form');
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform');
  await page.getByText('Name *Your answer').click();
  await page.locator('.aCsJod').first().click();
  await page.getByRole('textbox', { name: 'Name Required question' }).fill('jane');
  await page.getByRole('textbox', { name: 'Name Required question' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email Required question' }).fill('jack@gmail.com');
  await page.locator('.e2CuFe').first();
  
  // await page.getByRole('option', { name: 'Y2' }).getByText('Y2').click();
  await page.getByRole('option', { name: 'Y2' }).click();
  // await page.getByRole('option', { name: 'Y3' }).getByText('Y3').click();
  await page.getByRole('option', { name: 'Y3' }).click();
  // await page.getByRole('option', { name: 'Y1' }).getByText('Y1').click();
  await page.getByText('Both WUDC Madrid and ABP Bali').click();
  await page.locator('div').filter({ hasText: 'ABP Bali' }).nth(1).click();
  await page.getByRole('radio', { name: 'WUDC Madrid', exact: true }).click();
  await page.getByRole('listbox', { name: 'Position Veto(Pick one only) Required question' }).getByRole('option', { name: 'Choose' }).click();
  await page.getByRole('option', { name: 'GW' }).getByText('GW').click();
  // await page.getByRole('option', { name: 'GW' }).click();
  await page.getByRole('option', { name: 'LO', exact: true }).getByText('LO').click();
  await page.getByRole('radio', { name: 'I do' }).click();
});

