describe('Login & User Listing with Session', () => {

  // Use Cypress built-in session for login
  before(() => {
    cy.session('user-login', () => {
      cy.visit('http://127.0.0.1:5500/app/login.html')

      // Perform login
      cy.get('#email').type('admin@test.com')
      cy.get('#password').type('123456')
      cy.get('#loginBtn').click()

      // Assert redirect to users page
      cy.url().should('include', '/users.html')
    })
  })

  beforeEach(() => {
    // Visit users page with session already active
    cy.visit('http://127.0.0.1:5500/app/users.html')
  })

  it('Click on first user View button', () => {
    // Wait for first view button to appear
    cy.get(':nth-child(1) > :nth-child(5) > .view-btn', { timeout: 10000 })
      .should('be.visible')
      .click()
      cy.wait(2000)

    // Assert redirect to user detail page
    cy.url().should('include', '/user-details.html')

    // Validate user details exist
    cy.get('#name').should('not.be.empty')
    cy.get('#email').should('not.be.empty')

      cy.get('.back-btn', { timeout: 10000 })
      .should('be.visible')
      .click()
      cy.wait(2000)

    // Assert redirect back to user listing page
    cy.url().should('include', '/users.html')
  })

  

})
