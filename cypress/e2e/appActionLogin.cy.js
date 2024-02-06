const data = require('../fixtures/example.json')
const {dashboardPage} = require('../support/Pages/dashboard.page')
describe('Login', () => {
    beforeEach(() => {
        cy.Login(data.usuario, data.senha)
    });
    it('App actions', () => {
        dashboardPage.siteName.should('be.visible')
    });
});