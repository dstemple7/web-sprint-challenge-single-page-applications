describe('Tests', () => {
  it('test that you can navigate to the form', () => {
    cy.visit('http://localhost:3000/Pizza')
  })

    it('test that you can add text to the box', () => {
      cy.get('input[name=name]')
      .type('David')
      .should('have.value', 'David')
  })

  it('test that you can select multiple toppings', () => {
    cy.get('input[name=Pepperoni]').click()
    .should('be.checked')
    cy.get('input[name=Mushrooms]').click()
    .should('be.checked')
  })

  it('test that you can submit the form', () => {
    cy.get('button#submitBtn').should('not.be.disabled')
  })
})