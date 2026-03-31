import Login from "../pages/login";
import Inventory from "../pages/inventory";

describe("Login", () => {
  beforeEach(() => {
    // Arrange
    cy.visit("/");
  });

  it.only("Realizar login com sucesso", () => {
    // Act
    cy.get('[data-test="username"]').type(Cypress.env("username"));

    cy.get('[data-test="password"]').type(Cypress.env("password"));

    cy.get('[data-test="login-button"]').click();

    // Assert
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cy.screenshot("login");
  });

  it("Realizar login informando credenciais inválidas", () => {
    // Act
    cy.get('[data-test="username"]').type("user.invalid");

    cy.get('[data-test="password"]').type("senha");

    cy.get('[data-test="login-button"]').click();
  });
});
