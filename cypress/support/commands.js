
 Cypress.Commands.add('login', () => {
    cy.visit('https://accounts.seebiz.cloud/')
    // cy.wait(50000)
    cy.get('#email').type('haroon.sqa@gmail.com')
    cy.get('#password').type('Temp123!')
    cy.get('#remember-me').check({force : true})
    cy.get('#loginBtn').click()
    cy.wait(20000)
    cy.get('#headerLogo').click()
    cy.get('.account-setting > ul > :nth-child(2) > a').click()
    cy.wait(20000)
    cy.get('.sso-blue-btn').click()

    cy.wait(20000)
    cy.get('#click_nav_arrow_button').click()

  })
