import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform?usp=send_form');
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdn4B_HrqHuIsJ-R5NC6yjKKq-fnq9Xzjb-vyg6E9GkiukqQQ/viewform');
  await page.locator('.rFrNMe').first().click();
  await page.getByRole('textbox', { name: 'Name Required question' }).click();
  await page.getByRole('textbox', { name: 'Name Required question' }).fill('jass');
  await page.getByRole('textbox', { name: 'Name Required question' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email Required question' }).fill('jass@gmail.com');
  await page.getByRole('listbox', { name: 'Year of Study Required question' }).getByRole('option', { name: 'Choose' }).click();
  await page.getByRole('option', { name: 'Y2' }).getByText('Y2').click();
  await page.getByText('ABP Bali', { exact: true }).click();
  await page.getByRole('listbox', { name: 'Position Veto(Pick one only) Required question' }).getByRole('option', { name: 'Choose' }).click();
  await page.getByRole('option', { name: 'LO', exact: true }).getByText('LO').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('radio', { name: 'I do' }).click();
});