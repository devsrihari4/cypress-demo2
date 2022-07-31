import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I on the login page', () => {
  cy.get('.globalNav__actions__login').click()
})

When('I enter incorrect credentials', () => {
  cy.get('#username').should('be.visible').type('hello@test.com')
  cy.get('#password').should('be.visible').type('hello@test.com')
  cy.get('.button-large').click()
})

Then('I see error message', () => {
  cy.get('.error1').should('be.visible')
})