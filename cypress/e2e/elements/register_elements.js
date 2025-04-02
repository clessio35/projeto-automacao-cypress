class RegisterElements {

    inputFirstName = () => { return '[placeholder="First Name"' }
    inputLastName = () => { return '[placeholder="Last Name"]' }
    inputAdddress = () => { return '.col-md-8 > .form-control' }
    inputAddressEmail = () => { return '#eid > .form-control' }
    inputPhone = () => { return ':nth-child(4) > .col-md-4 > .form-control' }
    selectFile = () => { return '#imagesrc' }
    selectGender = () => { return ':nth-child(5) > .col-md-4 > :nth-child(1)' }
    checkBoxHobbies = () => { return "#checkbox2" }
    selectLanguage = () => { return '#msdd' }
    selectSkills = () => { return '#Skills' }
    selectCountry = () => { return '#country' }
    selectYear = () => { return '#yearbox' }
    selectMonth = () => { return '[placeholder="Month"]' }
    selectDay = () => { return '#daybox' }
    inputPassword = () => { return '#firstpassword' }
    inputConfirmPassword = () => { return '#secondpassword' }
    btnSubmit = () => { return '#submitbtn' }
    btnRefresh = () => { return '#Button1' }



} export default RegisterElements;