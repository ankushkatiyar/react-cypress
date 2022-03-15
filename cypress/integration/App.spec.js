/// <reference types="cypress" />

it("google", () => {
  cy.visit("https://www.google.com/");
  cy.get(".gLFyf").type("ankush{enter}");
});
