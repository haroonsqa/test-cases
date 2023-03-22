describe('Test Apis', () => {
  it('should yield Sunject from command' , () => {

    cy.visit('https://accounts.seebiz.com/')
    cy.get('h3').then(h3name =>{
      expect(h3name.text()).to.eq('One account for all.')
    })

  
  })
})