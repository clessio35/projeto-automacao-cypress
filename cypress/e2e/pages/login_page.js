import HomeElements from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElements
const url = Cypress.config('baseUrl')

class LoginPage{

    accessHomePage(){
        cy.log('ACCESS HOME PAGE');
        cy.visit(url);
        cy.wait(3000);
        cy.get(homeElements.btnHideCookie()).should('be.visible').click();
    }

    accessLoginPage(){
        cy.log('LOGIN PAGE');
        cy.contains(homeElements.selectCustomer()).should('be.visible').click();
        cy.contains(homeElements.btnLogin()).should('be.visible').click();
    }

    fillLoginForm(email, password){
        cy.log('FILLS THE LOGIN FORM');
        cy.get(loginElements.inputEmail()).should('be.visible').type(email);
        cy.get(loginElements.inputPassword()).should('be.visible').type(password);
    }

    submitLogin(){
        cy.log('CLICK SUBMIT BUTTON');
        cy.get(loginElements.submitLogin()).should('be.visible').click();
    }



}export default LoginPage