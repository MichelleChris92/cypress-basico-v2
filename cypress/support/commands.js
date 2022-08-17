Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Michelle')
    cy.get('#lastName').type('Benedetti')
    cy.get('#email').type('michelle.bene92@outlook.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
