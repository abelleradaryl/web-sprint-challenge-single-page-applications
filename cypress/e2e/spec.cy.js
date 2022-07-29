describe('form', () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000")
      cy.get('#order-pizza').click()
  })

it('Makes sure text inputs can be added', () => {
  cy.get('input[name=name]')
  .type('Full Name')
  .should('have.value', 'Full Name')

  cy.get('input[name=specialInstructions]')
  .type('Special Instruction')
  .should('have.value', 'Special Instruction')
})

it('Makes sure checkboxes work', () => {
  cy.get('input[name=toppingOne]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingTwo]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingThree]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingFour]')
  .check()
  .should('have.value', 'true')
})

it('Makes sure form can be submitted', () => {
  cy.get('input[name=name]')
  .type('Full Name')
  .should('have.value', 'Full Name')

  cy.get('select')
  .select('medium')
  .should('have.value', 'medium')

  cy.get('input[name=specialInstructions]')
  .type('Special Instructions')
  .should('have.value', 'Special Instructions')

  cy.get('input[name=toppingOne]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingTwo]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingThree]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingFour]')
  .check()
  .should('have.value', 'true')

  cy.get('#order-button')
  .click()
})
})