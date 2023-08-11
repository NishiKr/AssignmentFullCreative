Cypress.Commands.add('drawPlus', ($canvas, position) => {

    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;
    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    //click
    cy.wrap($canvas)
        .scrollIntoView()
        .click(plotX - 50, plotY).click(plotX + 50, plotY).click(plotX, plotY - 50).click(plotX, plotY + 50)
})

Cypress.Commands.add('drawHorizontalLine', ($canvas, position) => {

    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;
    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    //click
    cy.wrap($canvas)
        .scrollIntoView()
        .click(plotX - 50, plotY).click(plotX + 50, plotY)
})

Cypress.Commands.add('drawVerticalLine', ($canvas, position) => {

    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;
    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    //click
    cy.wrap($canvas)
        .scrollIntoView()
        .click(plotX, plotY - 50).click(plotX, plotY + 50)
})

Cypress.Commands.add('drawRectangle', ($canvas, position) => {
    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;
    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    //click
    cy.wrap($canvas)
        .scrollIntoView()
        .click(plotX - 40, plotY).click(plotX + 70, plotY + 70);
})

Cypress.Commands.add('drawCircle', ($canvas, position, radius) => {
    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;

    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    //click
    cy.wrap($canvas)
        .scrollIntoView()
        .click(plotX - radius, plotY - radius).click(plotX + radius, plotY + radius);
})

Cypress.Commands.add('eraseHorizontalLine', ($canvas, position) => {

    // Total width and height of the canvas
    const canvasWidth = $canvas.width();
    const canvasHeight = $canvas.height();

    // Center of canvas
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;

    // Formula to find the position to start drawing
    let plotX = 0;
    let plotY = 0;
    if (position === 'topLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'bottomLeft') {
        plotX = canvasCenterX - ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY + ((canvasCenterY / 3) * 2);
    } else if (position === 'topRight') {
        plotX = canvasCenterX + ((canvasCenterX / 3) * 2);
        plotY = canvasCenterY - ((canvasCenterY / 3) * 2);
    }
    // Hold left click in the initial position
    cy.wrap($canvas)
        .trigger('mouseover').wait(1000)
        .trigger('mousedown', {which: 1}).wait(1000)
        .trigger('mousemove', {clientX: plotX - 50, clientY: plotY}).wait(1000)
        .trigger('mousemove', {clientX: plotX + 50, clientY: plotY}).wait(1000)
        .trigger('mouseup', {force: true}).wait(1000)
})