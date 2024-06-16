class LoginPage {
  elements = {
    usernameInput: () => cy.xpath("//input[@name='id']"),
    passwordInput: () => cy.xpath("//input[@name='Password']"),
    loginBtn: () => cy.xpath("//button[@type='submit']"),
    confirmBtn: () => cy.xpath("//button[contains(@class, 'confirm ')]"),
    errorMessage: () => cy.xpath("//div[@role='dialog']//div[contains(@class, 'html-container')]"),
  };

  elementsGoogle = {
    usernameInput: () => cy.xpath(" //input[@type='text']"),
    passwordInput: () => cy.xpath("//input[@type='password']"),
    nextButton: () => cy.xpath("//button[@type='button']//span[.='Tiếp theo']"),
    googleButton: () => cy.xpath("//button[@class='kakao_btn double']")
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickConfirmButton() {
    this.elements.confirmBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    this.elements.confirmBtn().click()
  }

}

export const loginPage = new LoginPage();
