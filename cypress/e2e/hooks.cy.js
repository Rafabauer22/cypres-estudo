describe("Hooks", () => {
  before(() => {
    cy.log("Executa somente antes de todos os testes");
  });

  beforeEach(() => {
    cy.log("Executa antes de cada um dos testes");
  });

  afterEach(() => {
    cy.log("Executa após cada um dos testes");
  });

  after(() => {
    cy.log("Executa somente após todos os testes");
  });

  // Open Cypress | Set 'only'
  it("Test 1", () => {
    cy.log("**Execução do Teste 1**");
  });

  // Open Cypress | Set 'only'
  it("Test 2", () => {
    cy.log("**Execução do Teste 2**");
  });

  // Open Cypress | Set 'only'
  it("Test 3", () => {
    cy.log("**Execução do Teste 3**");
  });
});
