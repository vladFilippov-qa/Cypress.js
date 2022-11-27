describe('Тестирование citilink.ru', function () {

     it('Позитивный кейс: верный логин, верный пароль при авторизации на citilink.ru', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button > .IconAndTextWithCount__icon_mainHeader > .Icon').click();       
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('mailer9@mail.ru');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('701vRf50');
        cy.get('.SignIn__button').click();
        cy.get('.HeaderUserName__image-container > .HeaderUserName__icon').click();
        cy.get('.UserMenu__menu-list > [href="https://www.citilink.ru/profile/orders/"]').click();
        cy.contains("Заказы")

        })
     
     it('Негативный кейс: верный логин, неверный пароль при авторизации на citilink.ru', function () {
        cy.reload();
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button > .IconAndTextWithCount__icon_mainHeader > .Icon').click();       
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('mailer9@mail.ru');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('701vRf51');
        cy.get('.SignIn__button').click();
        cy.contains("Неверный логин или пароль")

        })


})
