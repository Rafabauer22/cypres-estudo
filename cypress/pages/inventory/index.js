class Inventory {
  validarAcessoAPagina() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.screenshot('acesso a página de inventário');
  }
}

export default new Inventory();
