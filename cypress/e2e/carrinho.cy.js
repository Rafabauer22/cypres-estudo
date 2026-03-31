import Login from "../pages/login";
import inventory from "../pages/inventory";
import header from "../pages/header";
import Cart from "../pages/cart";

describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
    Login.preencherCredenciaisValidas();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    const qtdItensAdicionados = 1;
    inventory.adicionarProduto("Sauce Labs Backpack");

    // Assert
    header.validarQueCarrinhoPossuiItens(qtdItensAdicionados);
    header.navegarParaCarrinho();

    Cart.validarProdutoPresenteNoCarrinho("Sauce Labs Backpack");
  });

  it("Remover produto do carrinho com sucesso", () => {
    // Arrange
    inventory.adicionarProduto("Sauce Labs Backpack");

    // Act
    inventory.removerProduto("Sauce Labs Backpack");

    // Assert
    header.validarQueCarrinhoNaoPossuiItens();
  });
});
