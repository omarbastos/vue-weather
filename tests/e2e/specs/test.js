// https://docs.cypress.io/api/introduction/api.html

describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Main Labels", () => {
    /*     cy.intercept("/data/2.5/*").as("api");
    cy.wait("@api"); */
    cy.contains("Bogotá").should("be.visible");

    cy.contains("3 Days").should("be.visible");
    cy.contains("Place to Visit").should("be.visible");
    cy.contains("Top Reviews").should("be.visible");
    cy.contains("Paris").should("be.visible");
    cy.contains("San Cristobal").should("be.visible");
    cy.contains("Humidity").should("be.visible");
    cy.get(".day-forecast")
      .should("be.visible") // yields <nav>
      .should("have.length", 3);
    cy.contains("Add Location").should("be.visible");
  });
});
