
describe('Тестирование авторизации', function () {
   it('Позитивный тест авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton').click()
    })
})



// german@dolnikov.ru / iLoveqastudio1