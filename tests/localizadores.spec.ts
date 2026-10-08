/*
=============================================================
DESAFIO PRÁTICO - LOCALIZADORES
Acessar a página de painel
=============================================================

Etapa de beforeEach para acessar a página de login:

1. Acessar a página de login.
2. Logar na tela de login com usuário e senha válidos de administrador.
3. Acessar a página de painel.

CT 1. Localizar e clicar no filtro de usuários e identificar
     algum usuário na lista de usuários.

CT 2. Localizar e clicar no filtro de produtos e identificar
     algum produto na lista de produtos, além de verificar
     o campo de pesquisa de produtos e o seletor de categorias.

CT 3. Localizar e clicar no filtro de lojas e identificar
     o título/nome da loja na lista de lojas e localizar
     as informações da loja.
*/

import { test, expect } from '@playwright/test';

const BASE_URL =
  'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

// =============================================================
// LOGIN ANTES DE CADA TESTE
// =============================================================

test.beforeEach(async ({ page }) => {

  // Acessar a página de login
  await page.goto(`${BASE_URL}/login.html`);

  // Preencher usuário
  await page.fill('#email', 'admin@system.com');

  // Preencher senha
  await page.fill('#password', 'AdminPassword123');

  // Verificar se o botão de login está habilitado
  await expect(page.locator('#loginBtn')).toBeEnabled();

  // Clicar no botão de login
  await page.click('#loginBtn');
});


// =============================================================
// ATO 1 - LOCALIZAR CLIENTE ONACILDA GLEIVANE
// =============================================================

test.describe('Ato 1 - Localizar Cliente Onacilda Gleivane', () => {

  test('Localizar Cliente Onacilda Gleivane', async ({ page }) => {

    // 1. Selecionar o filtro "Clientes"
    await page.selectOption('#adminUserRole', {
      label: 'Clientes'
    });

    // 2. Buscar pelo nome
    await page.fill(
      '#adminUserSearch',
      'Onacilda Gleivane'
    );

    // 3. Localizar o card da cliente
    const clienteCard = page
      .locator('article.user-card')
      .filter({
        hasText: 'Onacilda Gleivane'
      });

    // 4. Verificar se o card está visível
    await expect(clienteCard).toBeVisible();

    // 5. Clicar no botão do card da Onacilda
    await clienteCard
      .locator('button.user-card-toggle')
      .click();

  });

});


// =============================================================
// ATO 2 - LOCALIZAR PRODUTO MOUSE ÓPTICO ATLAS
// =============================================================

test.describe('Ato 2 - Localizar produto Mouse Óptico Atlas', () => {

  test('Localizar produto Mouse Óptico Atlas', async ({ page }) => {

    // 1. Clicar na aba "Produtos"
    await page
      .getByRole('button', { name: /Produtos/ })
      .click();

    // 2. Verificar se a lista de produtos está visível
    await expect(
      page.locator('#adminProductsList')
    ).toBeVisible();

    // 3. Localizar o campo de pesquisa de produtos
    const campoPesquisa = page.locator('#productSearch');

    // 4. Verificar se o campo de pesquisa está visível
    await expect(campoPesquisa).toBeVisible();

    // 5. Selecionar a categoria "Periféricos"
    await page.selectOption(
      '#productCategoryFilter',
      {
        label: 'Periféricos'
      }
    );

    // 6. Pesquisar pelo produto
    await campoPesquisa.fill('Mouse Óptico Atlas');

    // 7. Verificar se o produto aparece na lista
    await expect(
      page.locator('#adminProductsList')
    ).toContainText('Mouse Óptico Atlas');

  });

});