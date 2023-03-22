

describe('Add Item Group', ()=>{
    it('Should Add Item Group', ()=>{
        cy.login()

        cy.get('#click_items_module > .ims-nav-menu-icon').click()
        cy.get(':nth-child(1) > .ims-nav--link-add > .ims-nav--add-icon').click()
        cy.get('#name').type('adding this item from auto ')
        cy.get('.group_main_set > :nth-child(1) > .react-autosuggest__container > .form-input').type('kg')
        cy.get('.attributes-field > .react-autosuggest__container > .form-input').type('color')
        cy.get('.select__value-container').type('red{enter}')
        cy.get('.select__value-container').type('black{enter}')

        // SKU
        cy.get('.td-group-inner > .attribute_btn').click()

        // COST PRICE
        cy.get('tbody > :nth-child(1) > :nth-child(3)').click({ force: true }).type('20.18')
        cy.get('.td-group-inner_2 > .popover__wrapper > .popover__title').click()
        cy.get('.td-group-inner_2 > .popover__wrapper > .popover__content > .btnsRow > .next-btn').click()

        // Selling price
        cy.get('tbody > :nth-child(1) > :nth-child(4)').type('25.78')
        cy.get(':nth-child(4) > .popover__wrapper > .popover__title').click({force : true})
        cy.get(':nth-child(4) > .popover__wrapper > .popover__content > .btnsRow > .next-btn').click()

        // Reorder level 
        cy.get('tbody > :nth-child(1) > :nth-child(8)').type('10')
        cy.get(':nth-child(8) > .popover__wrapper > .popover__title').click({force : true})
        cy.get(':nth-child(8) > .popover__wrapper > .popover__content > .btnsRow > .next-btn').click()
        cy.get('.action-buttons--submit').click()
       
        // Opening Stock
        cy.get(':nth-child(1) > :nth-child(1) > .w-100 > :nth-child(1) > :nth-child(3) > .form-table--container > .list-table > tbody > tr > :nth-child(2) > .form-field').type('1200')
        cy.get('.popover__title').click({force : true})
        cy.get('.btnsRow > .next-btn').click()

        cy.get('.action-buttons--submit').click()

    })
})