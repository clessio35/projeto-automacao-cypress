class RegisterElements {

    inputFirstName = () => { return '[placeholder="First Name"' }
    inputLastName = () => { return '[placeholder="Last Name"]' }
    inputAdddress = () => { return '//*[@id="basicBootstrapForm"]/div[2]/div/textarea' }
    inputAddressEmail = () => { return "//input[@type='email']" }
    inputPhone = () => { return "//input[@type='tel']" }
    selectFile = () => { return '#imagesrc' }
    selectGender = () => { return "//input[@type='radio']" }
    checkBoxHobbies = () => { return "//input[@id='checkbox1']" }
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