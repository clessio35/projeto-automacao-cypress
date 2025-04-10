/// <reference types="cypress" />
import LoginPage from "../pages/login_page"
const loginPage = new LoginPage



Given(/^eu acesso a pagina home da aplicacao$/, () => {
	loginPage.accessHomePage();
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email, password) => {
	loginPage.accessLoginPage();
    loginPage.fillLoginForm(email, password);
});

When(/^clicar no botao entrar$/, () => {
	loginPage.submitLogin();
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	loginPage.validateLoginPage();
});

