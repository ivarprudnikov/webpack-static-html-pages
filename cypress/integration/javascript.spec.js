/// <reference types="cypress" />

context('CSS', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Foo and Bar are stored in window object', () => {
    cy.window()
      .its('Foo.value')
      .should('equal', 'foobar')

    cy.window()
      .its('Bar')
      .should('equal', 'barfoo 1')
  })
})
