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
});

describe("GitHub Login Test", () => {
  it("should log in using GitHub", () => {
    cy.visit("/");

    cy.task("GitHubSocialLogin", {
      username: Cypress.env("GITHUB_USERNAME"),
      password: Cypress.env("GITHUB_PASSWORD"),
      loginUrl: "http://localhost:3000/api/auth/signin/github",
      headless: false,
      loginSelector: 'button[data-cy="github-login"]',
      postLoginSelector: ".navbar",
    }).then(({ cookies }) => {
      cookies.forEach((cookie) => {
        cy.setCookie(cookie.name, cookie.value);
      });

      cy.reload();
    });
  });
});
