/// <reference types="cypress" />

context('CSS', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('homepage colours', () => {
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(102, 202, 100)')
    cy.get('.page-title')
      .should('have.css', 'color', 'rgb(173, 255, 47)')
    cy.get('nav')
      .should('have.css', 'background-color', 'rgb(196, 0, 0)')
    cy.get('footer')
      .should('have.css', 'background-color', 'rgb(40, 40, 40)')
  })
})
