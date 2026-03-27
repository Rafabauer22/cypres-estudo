import login from "../pages/login";

describe("Login", () => {
  beforeEach(() => {
    // Arrange
    cy.visit("https://www.saucedemo.com/");
  });
  it("Realizar login com sucesso", () => {
    // Act

    login.preencherCredenciaisValidas();

    // Assert
    cy.screenshot("login");

    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it.only("Realizar login informando credenciais inválidas", () => {
    // Act
    cy.get('[data-test="username"]').type("user.invalid");
    cy.get('[data-test="password"]').type("senha");
    cy.get('[data-test="login-button"]').click();
    cy.screenshot("erro credenciais inválidas");
    // Assert
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service",
    );

    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
