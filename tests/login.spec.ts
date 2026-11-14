import { test, expect } from '@playwright/test';

test('teste amazon', async ({ page }) => {

  await page.goto('https://www.amazon.com.br');

  await page.locator('#nav-link-accountList-nav-line-1').click();
  const campoEmail = page.locator("#ap_email_login");
  await campoEmail.click();
  await campoEmail.fill("*****");
 const botaoEmail = page.locator('input[type="submit"]');

  await botaoEmail.click();

  const campoSenha =  page.locator('input[type="password"]');
 await campoSenha.click()
  await campoSenha.fill("****");


   const botaoSenha = page.locator('input[aria-labelledby="auth-signin-button-announce"]');
  await botaoSenha.click();

  await expect( page.locator('#gwm-windows')).toBeVisible();
});
// retomei dia 12 / 11 ... agora esta salvo no git
//13/11 - Cenário Feliz de login válidado ok!