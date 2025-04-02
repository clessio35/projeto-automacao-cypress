/// <reference types="cypress" />
import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements;

const url = 'https://demo.automationtesting.in/Register.html';

class RegisterPage {


    visitPage(){
        cy.visit(url);
    }

    fillNameAndLastName(name, lastName) {
        cy.log('FILL NAME AND LAST NAME');
        cy.get(registerElements.inputFirstName()).should('exist').type(name);
        cy.get(registerElements.inputLastName()).should('exist').type(lastName);
    }
    fillContacts(address, email, phone) {
        cy.log('FILL ADDRESS');
        cy.get(registerElements.inputAdddress()).should('exist').click().type(address);
        cy.get(registerElements.inputAddressEmail()).should('exist').type(email);
        cy.get(registerElements.inputPhone()).should('exist').type(phone);
    }
    selectRadioGender() {
        cy.log('SELECT GENDER');
        cy.get(registerElements.selectGender()).should('exist').click();
    }
    selectCheckHobbies(hobbies) {
        cy.log('SELECT HOBBIES');
        cy.get(registerElements.checkBoxHobbies()).should('exist').check(hobbies);
    }
    selectLanguages() {
        cy.log('SELECT LANGUAGES');

    }
    selectSkills(skills) {
        cy.log('SELECT SKILLS');
        cy.get(registerElements.selectSkills()).should('exist').select(skills);
    }
    selectCountry(country) {
        cy.log('SELECT COUNTRY');
        cy.get(registerElements.selectCountry()).should('exist').select(country, { force: true });
    }
    selectBirthDay(year, month, day) {
        cy.log('SELECT BIRTHDAY');
        cy.get(registerElements.selectYear()).should('exist').select(year);
        cy.get(registerElements.selectMonth()).should('exist').select(month);
        cy.get(registerElements.selectDay()).should('exist').select(day);
    }
    inputPasswords(pass, confirmPass) {
        cy.log('INPUT PASSWORD');
        cy.get(registerElements.inputPassword()).should('exist').type(pass);
        cy.get(registerElements.inputConfirmPassword()).should('exist').type(confirmPass);
    }

    btnSubmit() {
        cy.log('BTN SUBMIT');
        cy.get(registerElements.btnSubmit(), { timeout: 20000 }).should('exist')
        .should('be.visible').should('not.have.class', 'hidden')
        .click({force:true});
    }

} export default RegisterPage;