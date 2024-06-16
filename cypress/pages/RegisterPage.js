class RegisterPage {
  elements = {
    registerButton: () => cy.xpath("//button[@class='normal_register_btn']"),
    idInput: () => cy.xpath("//input[@placeholder='4-20 alphanumeric characters']"),
    passwordInput: () => cy.xpath("//input[@placeholder='8 to 20 uppercase/lowercase letters, numbers, and special characters']"),
    confirmPasswordInput: () => cy.xpath("//input[@placeholder='Please re-enter your password.']"),
    nameInput: () => cy.xpath("//input[@placeholder='Please enter your name.']"),
    mobilePhoneInput: () => cy.xpath("//input[contains(@placeholder, 'Please enter only numbers without')]"),
    emailInput: () => cy.xpath('//input[@placeholder="Please enter your email address."]'),
    addressInput: () => cy.xpath('//input[@placeholder="Approval may be restricted if the address is not entered."]'),
    shopNameInput: () => cy.xpath("//span[@class='b_none']/../input"),
    agreeButton: () => cy.xpath("//label[.='I agree to the terms and conditions.']"),
    submitRegisterButton: () => cy.xpath("//button[normalize-space()='Register']")
  };

  clickRegister() {
    this.elements.registerButton().click();
  }

  clickSubmitRegisterButton() {
    this.elements.submitRegisterButton().click();
  }

typeID(idName) {
    if (idName) {
      this.elements.idInput().type(idName);
    } else {
      throw new Error('idName is undefined1');
    }
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeConfirmPassword(confirmPassword) {
    this.elements.confirmPasswordInput().type(confirmPassword);
  }

  typeName(name) {
    this.elements.nameInput().type(name);
  }

  typeMobilePhone(mobilePhone) {
    this.elements.mobilePhoneInput().type(mobilePhone);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typeAddress(address) {
    this.elements.addressInput().type(address);
  }

  typeShopName(shopName) {
    this.elements.shopNameInput().type(shopName);
  }

  clickAgreeButton() {
    this.elements.agreeButton().click();
  }


  // submitLogin(username,password){
  //   this.elements.usernameInput().type(username);
  //   this.elements.passwordInput().type(password);
  //   this.elements.loginBtn().click();
  //   this.elements.confirmBtn().click()
  // }
}

export const registerPage = new RegisterPage();
