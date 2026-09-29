import {test,expect} from "@playwright/test";

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('ato 1 - validar carregamento e visibilidade de elementos', async () =>{

test('Validar titulo e carregamento da pagina', async ({page}) =>{
// NAVEGAR ATÉ A PÁGINA DE LOGIN
await page.goto(`${BASE_URL}/login.html`)
// VALIDAR TÍTULO
await expect(page).toHaveTitle(/LojaQA | Entrar/i);
});
test('Verificar exibicao dos campos do form de login', async ({page})=>{
//NAVEGAR ATE PAGINA DE LOGIN
await page.goto(`${BASE_URL}/login.html`)

//VALIDAR CAMPOS
await expect(page.locator('#email')).toBeVisible();
await expect(page.locator('#password')).toBeVisible(); 
await expect(page.locator('#loginBtn')).toBeVisible(); 
//VERIFICAR SE BOTÃO ESTAR DESATIVADO
await expect(page.locator('#loginBtn')).toBeDisabled();

});


});