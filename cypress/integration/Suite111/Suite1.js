import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When('I select Login button', () => {
  cy.get('.globalNav__actions__login').click()
})

Then('I see Username and Password inputs', () => {
  cy.get('#username').should('be.visible')
  cy.get('#password').should('be.visible')
})