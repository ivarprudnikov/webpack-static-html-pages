/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('is homepage', () => {
    cy.get('.page-title').should('contain', 'HOME')
    cy.location('pathname').should('equal', '/')
  })

  it('opens home page', () => {
    cy.get('body > nav > ul').contains('Home').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/index.html')
    cy.get('.page-title').should('contain', 'HOME')
  })

  it('opens about page', () => {
    cy.get('body > nav > ul').contains('About').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/about.html')
    cy.get('.page-title').should('contain', 'ABOUT')
  })

  it('opens contacts page', () => {
    cy.get('body > nav > ul').contains('Contacts').click()
    cy.location('pathname', { timeout: 10000 }).should('equal', '/contacts.html')
    cy.get('.page-title').should('contain', 'CONTACTS')
  })

  it('navigation: home > about > home', () => {
    cy.get('body > nav > ul').contains('About').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/about.html')
    cy.get('body > nav > ul').contains('Home').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/index.html')
  })

  it('navigation: home > about > contacts', () => {
    cy.get('body > nav > ul').contains('About').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/about.html')
    cy.get('body > nav > ul').contains('Contacts').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/contacts.html')
  })

  it('navigation: home > contacts > home', () => {
    cy.get('body > nav > ul').contains('Contacts').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/contacts.html')
    cy.get('body > nav > ul').contains('Home').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/index.html')
  })

  it('navigation: home > contacts > about', () => {
    cy.get('body > nav > ul').contains('Contacts').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/contacts.html')
    cy.get('body > nav > ul').contains('About').click()
    cy.location('pathname', { timeout: 10000 }).should('contain', '/about.html')
  })
})
