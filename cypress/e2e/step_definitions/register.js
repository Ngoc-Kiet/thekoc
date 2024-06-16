import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { commonPage } from "@pages/CommonPage";
import { registerPage } from '@pages/RegisterPage';
// import { commonPage } from "@pages/CommonPage";

Given("A web browser is at the koc register page", () => {
  cy.visit("https://thekoc.io/en/member/register");
  registerPage.clickRegister();
});

// When('I have a new user with the following details', (dataTable) => {
//   const users = dataTable.hashes().map(userData => {
//     const user = {};
//     for (const key in userData) {
//       if (userData[key] === 'random') {
//         if (key === 'email') {
//           user[key] = commonPage.generateRandomEmail();
//         } else {
//           user[key] = commonPage.generateRandomString(10);
//         }
//       } else {
//         user[key] = userData[key];
//       }
//     }
//     return user;
//   });

//   // Lưu dữ liệu người dùng vào biến Cypress
//   cy.wrap(users).as('users');
// });

When('I register', () => {

  // const password = commonPage.generateRandomString(5)
  registerPage.typeID(commonPage.generateRandomString(5));
  registerPage.typePassword("password");
  registerPage.typeConfirmPassword("password");
  registerPage.typeName(commonPage.generateRandomString(5));
  registerPage.typeMobilePhone("0984645832");
  registerPage.typeEmail(commonPage.generateRandomEmail());
  registerPage.typeAddress(commonPage.generateRandomString(10));
  registerPage.typeShopName(commonPage.generateRandomString(10));
 
});

When ('I click agree button' , ()=>{
  registerPage.clickAgreeButton()
})

When ('I click submit register button' , ()=>{
  registerPage.clickSubmitRegisterButton()
})

// Then('the users should be successfully registered', () => {
//   // Kiểm tra kết quả đăng ký thành công
//   cy.url().should('include', '/dashboard');
//   cy.contains('Registration successful').should('be.visible');
// });
