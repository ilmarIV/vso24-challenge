describe('Home Page', () => {
  it('should load successfully', () => {
    cy.visit('/');
    cy.contains('React Food Order App'); // Replace with text on your home page
  });
});
