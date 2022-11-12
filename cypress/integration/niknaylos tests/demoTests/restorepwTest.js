
describe('Тестирование логики восстановления пароля', function () {
   it('Проверка работоспособности функции восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('asd@asd.asd');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton').click()
    })
})
