
describe('Тестирование авторизации Staya', function () {
   it('Позитивный тест авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/login"]').click();
        cy.get('.auth-form > form > [type="email"]').type('cryzje2@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Staya1342998');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})


// cryzje2@gmail.com ; Staya1342998