

describe('Login testcases  ', () => 
{
    it('Should check multiple credentials', () =>{

        cy.fixture("Login.json").then( (data)=>{
            cy.visit('https://accounts.seebiz.cloud/')
            data.forEach((LoginData)=>{
            
                cy.get('#email').clear().type(LoginData.email)
                cy.get('#password').clear().type(LoginData.password)
                cy.get('#remember-me').check({force : true})
                cy.get('#loginBtn').click()

                if(LoginData.email=='Haroon.sqa@pk.see.biz' && LoginData.password=='Temp123!')
                {
                    // cy.wait(20000)
                    cy.get('.sso-page-top > h1').should('have.text', LoginData.Expected)
                 
                }
                else{
                    cy.get('#errorDiv').should('have.text',LoginData.Expected) 
                }
                
               
            })


        })

         

        })  
    


        })

   