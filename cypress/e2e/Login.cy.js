const LoginPage = require('../support/Pages/login.page')
const {dashboardPage} = require('../support/Pages/dashboard.page')
const data = require('../fixtures/example.json')
describe('Login', () => {
  beforeEach(() => {
    cy.visit('wp-admin')
  });

  it('Login para tela de admin', () => {
    LoginPage.login(data.usuario, data.senha)
    dashboardPage.siteName.should('be.visible')
  });
});