describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("should display random value on client", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        // Stub your functions here
        cy.stub(win.Math, "random").returns(0.8);
      },
    });

    cy.get("h6").should("have.text", "0.8");
  });

  it("should have the brand inside an h1 tag", () => {
    cy.visit("/");
    // Om vi skriver så här så säkerställer
    // vi att det är en h1
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");

    // Det gör vi inte här, spelar det någon roll?
    cy.getById("title").contains("Welcome to my Blog").should("be.visible");
  });
});
