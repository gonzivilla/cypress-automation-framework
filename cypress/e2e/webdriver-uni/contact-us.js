import HomePage_PO from '../../support/pageObjects/webdriver-uni/HomePage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000)
  const homepage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

 
  beforeEach(function () {
    //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
    //cy.visit("http://webdriveruniversity.com/")
    //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    
    homepage_PO.visitHomepage();
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_Button();
    cy.pause();

    
    
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    //cy.get('#contact-us').click({force: true})
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email,
    //   "How can I learn Cypress?", "h1", "Thank You for your Message!");
    
    contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!")
    
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('body').contains('Error: all fields are required');
    // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name,
    //   " ", "How can I learn Cypress?", "body", "Error: Invalid email address"
    // );

   
    contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ", "How can I learn Cypress?", "body", "Error: Invalid email address")
    
  });
});
