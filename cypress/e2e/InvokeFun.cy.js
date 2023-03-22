describe('Invock Function', () => {
    it('Invoke ' , () => {
  
      cy.visit('https://accounts.seebiz.com/')
      cy.get('h3').invoke('text').then(h3text => {
        expect(h3text).to.eq('One account for all.')
      })
    
    })
  })