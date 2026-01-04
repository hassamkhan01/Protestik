describe('Login and User Detail Test', () => {

  // Before each test, visit the login page
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/app/login.html') // change URL if needed
  })

  it('Should login successfully', () => {
    // Type email & password
    cy.get('#email').type('admin@test.com')
    cy.get('#password').type('123456')

    // Click login button
    cy.get('#loginBtn').click()

    // Assert redirect to user listing page
    cy.url().should('include', '/users.html')
    cy.wait(2000);

  })

})
