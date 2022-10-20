
describe('Тестирование авторизации', function () {
   it('Негативный тест авторизации с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Asdasd1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton').click()
    })
})



// german@dolnikov.ru / iLoveqastudio1