/// <reference types="cypress" />

describe('check the inputs', () => {
    it('can navigate to the site', () => {
        // this is setup for the actual test
        cy.visit('http://localhost:3000/pizza')
        // assert that the site we landed at is the correct one
      })

    it('can type a text for a new name', () => {
        cy.get('input[name="username"]')
          .type('John Adams')
          .should('have.value','John Adams')
      })
})

describe('check submission', () => {
    it('can submit a pizza request', () => {
        cy.get('#addButton').click()
    })
})