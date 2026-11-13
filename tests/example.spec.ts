import { test, expect } from '@playwright/test';

test('teste amazon', async ({ page }) => {

  await page.goto('https://www.amazon.com.br');

  await page.locator('#nav-link-accountList-nav-line-1').click();


  await page.
});
// retomei dia 12 / 11 ... agora esta salvo no git