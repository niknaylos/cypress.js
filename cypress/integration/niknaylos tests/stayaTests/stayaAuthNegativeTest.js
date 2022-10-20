
describe('Тестирование авторизации Staya', function () {
   it('Позитивный тест авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/login"]').click();
        cy.get('.auth-form > form > [type="email"]').type('cryzje2@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Asdasd1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
