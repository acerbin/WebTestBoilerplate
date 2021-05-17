describe('Launch a platform', () => {

    beforeEach(() => {
        cy.visit('https://google.com')
      })

    it('Validates the page is loaded', () => {
        cy.contains('I agree').click()
        cy.get('.gLFyf').type("Cypress")
        cy.takeSnapshot('google', {x: 300, y: 0, width: 420, height:490});
    })
  })