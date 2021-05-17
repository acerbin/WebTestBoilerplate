// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("takeSnapshot", (name, size =  null) => {
    if(Cypress.env('snapshots') === true){
      cy.document()
        .toMatchImageSnapshot({
          "name": name,
          "imageConfig": {
            "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
            "threshold": 0.1,                      // Amount in pixels or percentage before snapshot image is invalid
            "thresholdType": "percent",             // Can be either "pixel" or "percent"
          },
          "screenshotConfig" : {
            capture: "viewport",
            disableTimersAndAnimations: true,
            clip: size
          }
        })
    }
  });