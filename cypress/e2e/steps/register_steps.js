/// <reference types="cypress" />

import RegisterPage from "../pages/register_page";

const registerPage = new RegisterPage;


Given(/^que estamos na page de Cadastro$/, () => {
	registerPage.visitPage();
});

When(/^inserimos nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name, lastName) => {
	registerPage.fillNameAndLastName(name, lastName);
});

When(/^informamos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address,email,phone) => {
	registerPage.fillContacts(address, email, phone);
});

When(/^nosso genero e hobbies "([^"]*)"$/, (hobbies) => {
	registerPage.selectRadioGender();
    registerPage.selectCheckHobbies(hobbies);
});

When(/^nossas skills "([^"]*)" e nosso pais "([^"]*)"$/, (skills,country) => {
    registerPage.selectSkills(skills);
	registerPage.selectCountry(country);
});

When(/^seleciono meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (year,month,day) => {
	registerPage.selectBirthDay(year, month, day);
});

When(/^inserir senha "([^"]*)" e "([^"]*)"$/, (pass, confirmPass) => {
	registerPage.inputPasswords(pass, confirmPass);
});

When(/^clico no botao entrar$/, () => {
	registerPage.btnSubmit();
    registerPage.selectImage();
});

Then(/^tenho meu cadastro realizado com sucess$/, () => {
	
});
