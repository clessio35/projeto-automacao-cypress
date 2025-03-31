/// <reference types="cypress" />
import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements;

class RegisterPage {

    fillNameAndLastName(name, lastName) {
        cy.log('FILL NAME AND LAST NAME');
        cy.get(registerElements.inputFirstName()).type(name);
        cy.get(registerElements.inputLastName()).type(lastName);
    }
    fillContacts(address, email, phone) {
        cy.log('FILL ADDRESS');
        cy.contains(registerElements.inputAdddress()).type(address);
        cy.contains(registerElements.inputAddressEmail()).type(email);
        cy.contains(registerElements.inputPhone()).type(phone);
    }
    selectRadioGender(gender) {
        cy.log('SELECT GENDER');
        cy.contains(registerElements.selectGender()).check(gender);
    }
    selectCheckHobbies(hobbies) {
        cy.log('SELECT HOBBIES');
        cy.contains(registerElements.checkBoxHobbies()).check(hobbies);
    }
    selectLanguages() {
        cy.log('SELECT LANGUAGES');

    }
    selectSkills(skills) {
        cy.log('SELECT SKILLS');
        cy.get(registerElements.selectSkills()).select(skills);
    }
    selectCountry(country) {
        cy.log('SELECT COUNTRY');
        cy.get(registerElements.selectCountry()).select(country);
    }
    selectBirthDay(year, month, day) {
        cy.log('SELECT BIRTHDAY');
        cy.get(registerElements.selectYear()).select(year);
        cy.get(registerElements.selectMonth()).select(month);
        cy.get(registerElements.selectDay()).select(day);
    }
    inputPasswords(pass, confirmPass) {
        cy.log('INPUT PASSWORD');
        cy.get(registerElements.inputPassword()).type(pass);
        cy.get(registerElements.inputConfirmPassword()).type(confirmPass);
    }

    btnSubmit() {
        cy.log('BTN SUBMIT');
        cy.get(registerElements.btnSubmit()).click();
    }

} export default RegisterPage;