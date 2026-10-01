import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('ato 1 - validar carregamento e visibilidade de elementos', async () => {

    test('Validar titulo e carregamento da pagina', async ({ page }) => {
        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`)
        // VALIDAR TÍTULO
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);
    });
    test('Verificar exibicao dos campos do form de login', async ({ page }) => {
        //NAVEGAR ATE PAGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`)

        //VALIDAR CAMPOS
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        //VERIFICAR SE BOTÃO ESTÁ DESATIVADO
        await expect(page.locator('#loginBtn')).toBeDisabled();

    });


});

test.describe('ATO 2 - Caminho Feliz', () => {
    test('Validar acesso e redirecionar ao painel', async ({ page }) => {
        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`)
        // PREENCHER CAMPOS UTILIZANDO O FILL()
        await page.fill('#email', 'bdc@gmail.com');
        await page.fill('#password', '12345678');
        // VALIDAR BOTÃO ATIVO
        await expect(page.locator('#loginBtn')).toBeEnabled();
        // AÇÃO DE CLIQUE NO BOTÃO
        await page.click('#loginBtn');
        //VALIDAR O REDIRECIONAMENTO PARA A PÁGINA /PAINEL
        await expect(page).toHaveURL(/painel\.html/);
    })

    test('Verificar botão login desativado quando email incorreto', async ({ page }) => {
        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`)
        // PREENCHER CAMPOS UTILIZANDO O FILL()
        await page.fill('#email', 'email_sem formato');
        await page.fill('#password', '123456789');
        //VERIFICAR SE BOTÃO ESTÁ ATIVO
        await expect(page.locator('#loginBtn')).toBeDisabled();
    })
        //CRIAR BLOCO DE TESTE ATO 3 PARA CRIAR USUARIOS DE CLIENTE E LOJISTA E 
        //VALIDAR O FORMULARIO DE CADASTRO
        //E O LOGIN DE CADA UM DELES
test.describe('CRIAR CADASTRO CLIENTE', () => {

    test('Criar Cadastros Cliente', async ({ page }) => {

        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`);

        // CLICAR NO BOTÃO CRIAR CONTA
        await page.getByRole('link', { name: 'Criar conta' }).click();

        // VALIDAR CAMPOS
        await expect(page.locator('#reg-name')).toBeVisible();
        await expect(page.locator('#reg-email')).toBeVisible();
        await expect(page.locator('#reg-password')).toBeVisible();

        // VERIFICAR SE BOTÃO ESTÁ DESATIVADO
        await expect(page.locator('#registerBtn')).toBeDisabled();

        // PREENCHER CAMPOS
        await page.fill('#reg-name', 'Onacilda Gleivane');
        await page.fill('#reg-email', 'onaglei@gmail.com');
        await page.fill('#reg-password', '12345678');

        // VALIDAR BOTÃO ATIVO
        await expect(page.locator('#registerBtn')).toBeEnabled();

        // CLICAR NO BOTÃO
        await page.click('#registerBtn');

        // VALIDAR REDIRECIONAMENTO PARA O PAINEL
        await expect(page).toHaveURL(/painel\.html/);
    });
});


test.describe('LOGIN CLIENTE', () => {

    test('Login Cliente', async ({ page }) => {

        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`);

        // PREENCHER CAMPOS
        await page.fill('#email', 'onaglei@gmail.com');
        await page.fill('#password', '12345678');

        // VALIDAR BOTÃO ATIVO
        await expect(page.locator('#loginBtn')).toBeEnabled();

        // CLICAR NO BOTÃO
        await page.click('#loginBtn');

        // VALIDAR REDIRECIONAMENTO PARA O PAINEL
        await expect(page).toHaveURL(/painel\.html/);
    });
});


test.describe('CRIAR CADASTRO LOJISTA', () => {

    test('Criar Cadastros Lojista', async ({ page }) => {

        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`);

        // CLICAR NO BOTÃO CRIAR CONTA
        await page.getByRole('link', { name: 'Criar conta' }).click();

        // VALIDAR CAMPOS
        await expect(page.locator('#reg-name')).toBeVisible();
        await expect(page.locator('#reg-email')).toBeVisible();
        await expect(page.locator('#reg-password')).toBeVisible();
        await expect(page.locator('#reg-role')).toBeVisible();

        // VERIFICAR SE BOTÃO ESTÁ DESATIVADO
        await expect(page.locator('#registerBtn')).toBeDisabled();

        // PREENCHER CAMPOS
        await page.fill('#reg-name', 'PAULA CARA DE PAU');
        await page.fill('#reg-email', 'palsa@gmail.com');
        await page.fill('#reg-password', '12345678');

        // SELECIONAR TIPO DE CLIENTE: LOJISTA
        await page.locator('#reg-role').selectOption('Lojista / vendedor');

        // VALIDAR BOTÃO ATIVO
        await expect(page.locator('#registerBtn')).toBeEnabled();

        // CLICAR NO BOTÃO
        await page.click('#registerBtn');

        // VALIDAR REDIRECIONAMENTO PARA O PAINEL
        await expect(page).toHaveURL(/painel\.html/);
    });
});


test.describe('LOGIN LOJISTA', () => {

    test('Login Lojista', async ({ page }) => {

        // NAVEGAR ATÉ A PÁGINA DE LOGIN
        await page.goto(`${BASE_URL}/login.html`);

        // PREENCHER CAMPOS
        await page.fill('#email', 'palsa@gmail.com');
        await page.fill('#password', '12345678');

        // VALIDAR BOTÃO ATIVO
        await expect(page.locator('#loginBtn')).toBeEnabled();

        // CLICAR NO BOTÃO
        await page.click('#loginBtn');

        // VALIDAR REDIRECIONAMENTO PARA O PAINEL
        await expect(page).toHaveURL(/painel\.html/);
    });
});
})