// <reference types="cypress" />


describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    afterEach(() => {
        cy.screenshot();
    });


    it('connection', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
    });

    it('addProduct', () => {
        
        var nbPrd = 0;
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        if(cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()) nbPrd++;
        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').should('be.visible');

        cy.get('.shopping_cart_badge')
        .invoke('text')
         // tip: use an assertion to print the extracted text
         .should('be.a', 'string')
         // convert text to integer
        .then(parseInt)
         // tip: make sure the conversion is successful
        .should('be.a', 'number')
        // compare the converted number to the expected value
         .and('equal', nbPrd)

    });

    it('Form', () => {

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("Niko");
        cy.get('[data-test="lastName"]').type("Maya");
        cy.get('[data-test="postalCode"]').type("33500");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

    })

    
    
});