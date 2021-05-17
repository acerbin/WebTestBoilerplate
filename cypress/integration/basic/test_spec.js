describe('Launch google and perform a search', () => {

    beforeEach(() => {
        cy.visit('https://google.com')
        cy.contains('I agree').click()
      })

    it('Validates the page is loaded', () => {
      cy.url().should('include', 'google') 
      cy.takeSnapshot('google', {x: 300, y: 0, width: 420, height:490});
    })

    it('Verifies server side request', () => {
      cy.server();
      cy.route('GET','/complete/search?**').as('search');
      cy.get('.gLFyf').type("Cypress")
      cy.get('.lnXdpd').click()
      cy.get('.FPdoLc > center > .gNO89b').click()
      cy.wait('@search').its('status').should('eq',null); //200, 201, etc.
      // cy.get('@search').should((xhr) => {
      //   expect(xhr.responseBody).to.have.property("a","b"); //verify server response
      // });
    })
  })