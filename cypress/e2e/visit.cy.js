describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staff-mmd7.vercel.app/')
    
    cy.contains('Buscar Evento')
  })
})