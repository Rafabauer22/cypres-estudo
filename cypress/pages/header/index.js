import { elements as el } from "./elements";

class Header {
  validarQueCarrinhoPossuiItens(quantidade) {
    cy.get(el.CartBadge)
      .should("be.visible")
      .and("have.text", quantidade.toString());
  }

  navegarParaCarrinho() {
    cy.get(el.CartContainer).click();
  }

  validarQueCarrinhoNaoPossuiItens() {
    cy.get(el.cartBadge).should("not.exist");

    cy.screenshot("produto removido");
  }
}

export default new Header();
