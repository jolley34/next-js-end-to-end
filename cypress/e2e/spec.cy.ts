interface Cookie {
  name: string;
  value: string;
}

describe("Event Creation", () => {
  before(() => {
    cy.task("reseed");
  });
  beforeEach(() => {
    cy.visit("/");
  });

  it("should create a new event with valid inputs", () => {
    cy.get('input[name="title"]').type("Test Event Title");
    cy.get('input[name="description"]').type(
      "This is a description of the event."
    );
    cy.get('input[name="image"]').type(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
    );
    cy.get('input[name="video"]').type(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
    );

    cy.get('button[type="submit"]').click();
  });

  it("should show error messages with invalid inputs", () => {
    cy.get('button[type="submit"]').click();

    cy.get("span").contains("Title is required").should("be.visible");
    cy.get("span").contains("Description is required").should("be.visible");
    cy.get("span").contains("Image URL is required").should("be.visible");

    cy.get('input[name="title"]').type("Incomplete Event");
    cy.get('button[type="submit"]').click();

    cy.get("span").contains("Description is required").should("be.visible");
    cy.get("span").contains("Image URL is required").should("be.visible");
  });

  it("should show preview of the image when a valid URL is provided", () => {
    const validImageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg";

    cy.get('input[name="image"]').type(validImageUrl);

    cy.get("img").should("have.attr", "src", validImageUrl).and("be.visible");
  });
});

describe("Feature Events Display", () => {
  beforeEach(() => {
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
});
