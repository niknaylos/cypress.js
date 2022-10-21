
describe('Тестирование авторизации', function () {
   it('Негативный тест авторизации с неправильным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('asdasd@asdasd.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton').click()
    })
})



