// describe('Register Test', () => {

//   beforeEach(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       return false;
//     });
//   });

//   it('should log in with valid credentials', () => {
//     cy.visit('https://chitti.app/workshops/');
    
//     cy.contains('h1', 'NEET JEE Workshop')
//       .should('exist')
//       .then(($heading) => {
//         cy.wrap($heading)
//           .parent()
//           .within(() => {
//             cy.contains('₹99')
//               .should('exist');
//           });
//       });

//     cy.contains('div', '₹99').should('exist');

//     cy.contains('h1', 'NEET JEE Workshop')
//       .should('exist')
//       .click({ force: true });

//     cy.wait(2000);

//     cy.contains('span', ' Register Now for ₹99 ')
//       .should('exist')
//       .click({ force: true });

//     cy.wait(2000);

//     cy.get('input[placeholder="Enter Name"]').type('Jacob samro',{ delay: 20 });
//     cy.wait(1000);

    
//     cy.get('.iti__flag-container').click();
//     cy.wait(1000);
//     cy.get('.iti__country-list')
//       .contains('li', 'United States')
//       .click({ force: true });

//     cy.wait(1000);

    
//     cy.get('.iti__flag-container').click();
//     cy.wait(1000);
//     cy.get('.iti__flag-container')
//       .contains('li', 'India')
//       .click({ force: true });

//     cy.wait(1000);

//     cy.get('input[type="tel"]').type('9884226399',{ delay: 20 });
//     cy.wait(1000);

//     cy.get('input[type="email"]').type('dev@lmes.in',{ delay: 20 });

//     cy.get('select.block.rounded-\\[14px\\].text-\\[\\#2A2A3B\\].cursor-pointer')
//       .select('Grade 12');
    
//     cy.contains('span','10:00 AM').click({ force: true });
//     cy.get('.w-full.bg-\\[\\#5551c5\\].rounded-\\[14px\\].h-12').click({ force: true });  
//     cy.wait(10000);
//     cy.get('iframe[src*="api.razorpay.com"]').should("be.visible");
//     cy.wait(10000);
    

    
//   });

// });
