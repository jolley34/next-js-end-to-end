describe("Feature Events Display", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  it("should display the featured events grid", () => {
    cy.get('[data-cy="featured-events-grid"]').should("be.visible");
  });

  it("should display at least one featured event", () => {
    cy.get('[data-cy="featured-event"]').should("have.length.at.least", 1);
  });

  it("should display event details for each featured event", () => {
    cy.get('[data-cy="featured-event"]').each(($event) => {
      cy.wrap($event).within(() => {
        cy.get(".event-title").should("not.be.empty");
        cy.get(".event-description").should("not.be.empty");
        cy.get("img").should("be.visible");
      });
    });
  });

  it("should have the brand inside an h1 tag", () => {
    cy.get("h1").contains("Welcome to Event").should("be.visible");
  });
});
