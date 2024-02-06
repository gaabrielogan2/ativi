class LoginPage {
    get user() {
        return cy.get('#user_login');
    }

    get password() {
        return cy.get('#user_pass');
    }

    get submitButton() {
        return cy.get('#wp-submit');
    }

    login(username, password) {
        this.user.type(username, {force: true});
        this.password.type(password);
        this.submitButton.click();
    }
}

module.exports = new LoginPage()