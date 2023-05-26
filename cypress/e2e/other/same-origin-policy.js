/// <reference types="cypress" />

describe("Cypress web Security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");
      
    });
  
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

  
  })
  
  