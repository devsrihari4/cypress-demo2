import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open application', () => {
  cy.visit(Cypress.config().baseUrl)
})