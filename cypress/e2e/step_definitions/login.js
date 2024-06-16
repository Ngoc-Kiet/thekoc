import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the koc login page", () => {
  cy.visit("https://thekoc.io/member/login");
});

When("A user enters the id {string}, the password {string}, and clicks on the login button", (id,password) => {
  loginPage.submitLogin(id,password)
  
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  // loginPage.submitLoginGoogle(id,password)
  cy.xpath("//button[@class='google_btn double']").click()
  cy.origin('https://accounts.google.com', {args: [username,password]},([username,password]) => {
    cy.get('input[type=email]').type(username);
    cy.get('div#identifierNext').click();

    cy.get('input[type=password]', { timeout: 10000 }).should('be.visible').type(password);
    cy.get('div#passwordNext').click();
  });
  
});

When("A user enters the username Naver {string}, the password Naver {string}, and clicks on the login button", (username,password) => {
  // loginPage.submitLoginGoogle(id,password)
  cy.xpath("//button[@class='naver_btn double']").click()
  cy.origin('https://nid.naver.com/', {args: [username,password]},([username,password]) => {
    cy.get('input[type="text"]').should('be.visible').type(username);

    cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type(password);
    cy.get('button[type="submit"]').click();
  });
  
});

When("A user enters the username Kakao {string}, the password Kakao {string}, and clicks on the login button", (username,password) => {
  // loginPage.submitLoginGoogle(id,password)
  cy.xpath("//button[@class='kakao_btn double']").click()
  cy.origin('https://accounts.kakao.com/', {args: [username,password]},([username,password]) => {
    cy.get('input[type="text"]').should('be.visible').type(username);

    cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type(password);
    cy.get('button[type="submit"]').click();
  });
  
});

When("A user enters the id {string}, the password {string}, and clicks on the login button unsuccessful", (id,password) => {
  loginPage.submitLogin(id,password)
  
});

When("User click button login", () => {
  loginPage.clickLogin()
  
});


Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "");
});

Then("The error message {string} is displayed", (errorMessage) => {
  cy.xpath("//div[@role='dialog']//div[contains(@class, 'html-container')]", { timeout: 10000 }).should('be.visible')
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
