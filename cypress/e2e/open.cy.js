describe('Register Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should log in with valid credentials', () => {

    cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=969687962985388677&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061895&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1', { failOnStatusCode: false });
    cy.viewport('macbook-16');
    cy.get('#twotabsearchtextbox').type('iphone 15{enter}', { delay: 20 });
    cy.scrollTo('bottom', { duration: 5000 });
    cy.scrollTo('top', { duration: 5000 });
    cy.get('input[type="checkbox"]').eq(0).click({ multiple: true ,force: true });
    






  })
})