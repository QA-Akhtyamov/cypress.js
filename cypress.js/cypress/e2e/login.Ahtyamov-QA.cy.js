
describe('Автотесты на форму логина', function () {
    it('1 Правельный логин,правельный пороль', function () {
         cy.visit('https://login.qa.studio/'); //вход в сайт
         cy.get('#mail').type('german@dolnikov.ru'); //ввод логин
         cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
         cy.get('#pass').type('iLoveqastudio1'); //вводим пороль
         cy.get('#loginButton').click(); //клик войти
         cy.get('#messageHeader').should('be.visible'); //надпись видема
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совподение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
     })
     it('2 Востоновление пароля', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввод логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#forgotEmailButton').click(); //клик забыли пороль
        cy.get('#forgotForm > .header').should('be.visible'); //надпись видема
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //совподение текста
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //крестик виден
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести логин
        cy.get('#restoreEmailButton').click(); //клик отправить код
        cy.get('#messageHeader').should('be.visible'); //надпись видема
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //совподение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден 
    })
     it('3 Правельный логин и неправельный пороль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввод логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio5'); //вводим пороль
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видема
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совподение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('4 Неравельный логин и правельный пороль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov23.ru'); //ввод логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //вводим пороль
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видема
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совподение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('5 Неравельный логин без @ и правельный пороль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('germandolnikov23.ru'); //ввод логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //вводим пороль
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видема
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //совподение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('6 Неравельный логин c заглавными и правельный пороль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввод логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //вводим пороль
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видема
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совподение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
 })
 