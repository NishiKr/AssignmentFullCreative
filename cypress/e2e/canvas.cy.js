describe('Test Suite - Assignment One', () => {
  beforeEach(function () {
      cy.visit('/')
  })


  it('Test Case One', () => {
      cy.get('#imageTemp').then($canvas => {

          cy.get('[title="Draw a line"]').should('be.visible').click().should('have.class', 'button line clicked')
          cy.drawHorizontalLine($canvas, "topLeft")
          cy.drawVerticalLine($canvas, "topLeft")

          cy.get('[title="Draw a rectangle"]').click().should('have.class', 'button rectangle clicked')
          cy.drawRectangle($canvas, "bottomLeft")

          cy.get('[title="Draw an ellipse or a circle"]').click().should('have.class', 'button ellipse clicked')
          cy.drawCircle($canvas, "topRight", 20)

      })
  })

  // it('TC1: Draw one horizontal line', () => {
  //     cy.get('[title="Draw a line"]').should('be.visible').click().should('have.class', 'button line clicked')
  //     cy.get('#imageTemp').then($canvas => {
  //         cy.drawHorizontalLine($canvas, "topLeft")
  //     });
  // })
  //
  // it('TC2: Draw one vertical line to intercept horizontal line', () => {
  //     cy.get('[title="Draw a line"]').should('be.visible').click().should('have.class', 'button line clicked')
  //     cy.get('#imageTemp').then($canvas => {
  //         cy.drawHorizontalLine($canvas, "topLeft")
  //         cy.drawVerticalLine($canvas, "topLeft")
  //     });
  // })
  //
  // it('TC3: Draw a rectangle', () => {
  //     cy.get('[title="Draw a rectangle"]').click().should('have.class', 'button rectangle clicked')
  //     cy.get('#imageTemp').then($canvas => {
  //         cy.drawRectangle($canvas, "bottomLeft")
  //     });
  // })
  //
  // it('TC4: Draw a circle', () => {
  //     cy.get('[title="Draw an ellipse or a circle"]').click().should('have.class', 'button ellipse clicked')
  //     cy.get('#imageTemp').then($canvas => {
  //         cy.drawCircle($canvas, "topRight")
  //     });
  // })
  //
  // it('TC5: Erase horizontal line', () => {
  //     cy.get('[title="Use eraser"]').click().should('have.class', 'button eraser clicked')
  //     cy.get('#imageTemp').then($canvas => {
  //         cy.eraseHorizontalLine($canvas, "topLeft")
  //     });
  // })

})