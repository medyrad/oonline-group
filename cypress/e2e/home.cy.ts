describe("Home page", () => {
  it("displays the call-to-action button", () => {
    cy.visit("/");
    cy.contains("button", /add/i).should("be.visible");
  });
});
