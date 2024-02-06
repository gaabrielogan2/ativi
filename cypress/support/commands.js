Cypress.Commands.add('Login', (user, password) => {
    const fd = new FormData()
    fd.append('log', user)
    fd.append('pwd', password)
    fd.append('wp-submit', 'Acessar')
    fd.append('redrect_to', `/wp-admin`)
    fd.append('testcookie', 1)

    cy.request({
        url: 'wp-login.php',
        method: 'POST',
        body: fd
    }).then((response) => {
        response.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor+1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('wp-admin')
})