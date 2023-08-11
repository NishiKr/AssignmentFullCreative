describe('Test Suite - Assignment One', () => {
    beforeEach(function () {
        cy.visit('/')
    })

    it('Test Case One', () => {
        cy.get('#imageTemp').then($canvas => {

            //hidingGoogleAd for better screenshot - visual testing assert
            cy.get('[class="adsbygoogle"]').hideElement()

            cy.get('[title="Draw a line"]').should('be.visible').click().should('have.class', 'button line clicked')
            cy.drawHorizontalLine($canvas, "topLeft")
            cy.drawVerticalLine($canvas, "topLeft")

            //visual testing assert
            cy.compareSnapshot('PlusSign', 0, 0)

            cy.get('[title="Draw a rectangle"]').click().should('have.class', 'button rectangle clicked')
            cy.drawRectangle($canvas, "bottomLeft")
            //c
            cy.compareSnapshot('PlusSign+Rectangle', 0, 0)

            cy.get('[title="Draw an ellipse or a circle"]').click().should('have.class', 'button ellipse clicked')
            cy.drawCircle($canvas, "topRight", 20)
            //visual testing assert
            cy.compareSnapshot('PlusSign+Rectangle+Circle', 0, 0)

        })
    })

})