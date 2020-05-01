/// <reference types="cypress" />

context('Images', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/about.html')
  })

  it('is about page', () => {
    cy.get('.page-title').should('contain', 'ABOUT')
  })

  it('loads image 01', () => {
    cy.get('.img-src-uses-require')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })

  it('loads image 02', () => {
    cy.get('.img-from-html-loader')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})
