// describe('Login Test', () => {

//     beforeEach(() => {
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             return false;
//         });
//     });

//     it('should log in with valid credentials', () => {
//         cy.visit('https://chitti.app/workshops/');
//         cy.get('.group.rounded-xl').each(($el) => {
//             const courseText = $el.text();

//             if (
//                 courseText.includes('NEET JEE Workshop') &&
//                 courseText.includes('Free') &&
//                 courseText.includes('Sunday, June 22, 2025') &&
//                 courseText.includes('10:00 AM IST') &&
//                 courseText.includes(' Tamil')
//             ) {

//                 cy.wrap($el).as('matchingCourse');
//             }
//         }).then(() => {

//             cy.get('.flex.flex-col.p-3.md\\:p-4.lg\\:p-6').filter(':contains("NEET JEE Workshop")')
//                 .filter(':contains("Free")')
//                 .click();
//         });
//         cy.contains('span', ' Register Now for Free ')
//             .should('exist')
//             .click({ force: true });
//         cy.wait(2000);
//         cy.get('input[type="text"]').type('Jacob Samro', { delay: 20 });
//         cy.wait(2000);
//         // Select United States
//         cy.get('.iti__flag-container').click();
//         cy.wait(2000);
//         cy.get('.iti__country-list')
//             .contains('li', 'United States')
//             .click({ force: true });
//         cy.wait(2000);
//         // Switch to India
//         cy.get('.iti__flag-container').click();
//         cy.wait(2000);
//         cy.get('.iti__flag-container')
//             .contains('li', 'India')
//             .click({ force: true });
//         cy.wait(2000);
//         cy.get('input[type="tel"]').type('9884226399', { delay: 20 });
//         cy.wait(2000);
//         cy.get('input[type="email"]').type('dev@lmes.in', { delay: 20 });
//         cy.get('select.block').select('Grade 12');
//         cy.contains('span', '10:00 AM').click({ force: true });
//         cy.contains('p', 'Register').click();
//         cy.contains('div', ' Registration Successful ')
//             .should('exist');
//     });
// });
