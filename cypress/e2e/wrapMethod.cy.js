describe('WraP method ', () => {
    it('Wrap' , () => {
  
      cy.visit('https://accounts.seebiz.com/')
      cy.get('h3').then(h3name =>{
       cy.wrap(h3name).should('contain', 'One account for all.')
      })
  
    
    })
  })