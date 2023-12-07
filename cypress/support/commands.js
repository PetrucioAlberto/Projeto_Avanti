
// CT001
Cypress.Commands.add('AcessarTelaDeCadastro',function(){
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get('.logoDemo').should("be.visible");
    cy.get("#menuUserLink").click(); 
    cy.get(".create-new-account").should("be.visible").click();  
    cy.get('.create-new-account').invoke('text').as('CREATE NEW ACCOUNT');   
})
Cypress.Commands.add('CadastrarUsuario',function(){
    cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("JoaoSilva"); // nome
    cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type("Joao@Joao.com"); // email
    cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456"); // senha
    cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456"); //confirma senha
    cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Joao"); // primeiro nome
    cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Silva"); //ultimo nome
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059"); // telefone
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil'); // pais
    cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco"); // cidade 
    cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Morrinhos"); // endereco
    cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo"); // estado
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06436-860")  // cep
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check(); // termo 
    cy.get('#register_btn').click();       // botao registar
})
Cypress.Commands.add('VerificarSeUsuarioEstarLogado',function(){
    cy.get('.desktop-handler > :nth-child(3)').should('be.visible');// o nome esta logado?
    cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('JoaoSilva'); // pega o nome logado
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' }); 
})
// CT002
Cypress.Commands.add('CadastrarUsuarioComEmailEmBranco',function(){
    cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("PedroRenato"); /// nome diferente
    cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type(' ');
    cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456");
    cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456");
    cy.get('label.invalid').should('be.visible').invoke('text').as('Email field is required');
    cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Pedro");
    cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Renato");
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059");
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
    cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco");
    cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Antonio");
    cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo");
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06246-090")
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check();
    cy.get('.sec-sender-a.ng-scope.invalid').should('be.visible');    // verifcase botao esta habilitado
    cy.screenshot()
})
// CT003
Cypress.Commands.add('CadastrarUsuarioExistente',function(){
    cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("JoaoSilva");
    cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type("Joao@Joao.com");
    cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456");
    cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456");
    cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Joao");
    cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Silva");
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059");
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
    cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco");
    cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo");
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06436-860")
    cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Morrinhos");
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check();
    cy.get('#register_btn').click();
    cy.get('div.center > .center').should('be.visible'); // verifica se aparece erro
    cy.get('div.center > .center').invoke('text').as('User name already exists'); // captura erro
    cy.screenshot({ capture: 'viewport' });       
})
// CT004
Cypress.Commands.add('AcessarTelaDeLogin',function(){
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get("#menuUserLink").click(); 
    cy.get(".create-new-account").should("be.visible");  //  verificar esse nome  create
    cy.get('.create-new-account').invoke('text').as('CREATE NEW ACCOUNT');  
})
// CT004
Cypress.Commands.add('RealizarLoginComNomeESenhaDoUsuario',function(){
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
    cy.get('#sign_in_btn').click();       
})
// CT005
Cypress.Commands.add('RealizarLoginComSenhaInvalida',function(){
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe654321');
    cy.get('#sign_in_btn').click(); 
     
    cy.get('#signInResultMessage').should('be.visible');
    cy.get('#signInResultMessage').invoke('text').as('Incorrect user name or password.') 
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });  
})
// CT006
Cypress.Commands.add('RealizarLoginComUsuarioEmBranco',function(){
    cy.get('[a-hint="Username"] > .inputContainer > .ng-valid').click();
    cy.get('label.invalid').should('be.visible');
    cy.get('label.invalid').invoke('text').as('Username field is required');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe654321');
    cy.get('.sec-sender-a.ng-scope.invalid').should('be.visible');
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });
})
// CT007
Cypress.Commands.add('RealizarLoginComSenhaEmBranco',function(){
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-valid').click();
    cy.get('.forgot-Passwowd').click();
    cy.get('label.invalid').should('be.visible');
    cy.get('label.invalid').invoke('text').as('Password field is required')
    cy.get('.sec-sender-a.ng-scope.invalid').should('be.visible');
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' }); 
})
// CT012
Cypress.Commands.add('RemoverProdutoDoCarrinho',function(){
    cy.get('#laptopsImg').click(); 
    cy.get(':nth-child(3) > :nth-child(4) > .productName').click();
    cy.get('.fixedBtn > .roboto-medium').click();
    cy.get('#shoppingCartLink').click();
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });
    cy.get('.remove').click();
    cy.get('.bigEmptyCart > .roboto-bold').should('be.visible');
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });
    })
// CT013
Cypress.Commands.add('RealizarEnvioDoPordutoNoCarrinho',function(){
    cy.get('#laptopsImg').click(); // clicar categoria
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click() // escolher produto
    cy.get('#Description > .roboto-regular').invoke('text').as('HP CHROMEBOOK 14 G1(ENERGY STAR') // qual foi
    cy.get('.BLACK').click() // escolher cor
    cy.get('.colorSelected').should('exist') // escolheu preto?
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type('3') // escolher qtd
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-valid').should('have.value', '3');
    cy.get('#Description > :nth-child(2)').should('be.visible'); // valor produto
    cy.get('#Description > :nth-child(2)').invoke('text').then((valorDoProduto) => {
    cy.get(':nth-child(10) > .attr').should('be.visible') // verificar se peso do esta na tela
    cy.get('.fixedBtn > .roboto-medium').click() // adicionar do carrinho
    cy.get('#shoppingCartLink').click(); // clicar no carrinho
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('contain.text','HP CHROMEBOOK 14 G1(ENERGY STAR') // se foi mesmo o produto escolhido
    cy.get(':nth-child(5) > .ng-binding').should('contain.text','3') // se foi mesmo a quantidade escolhida
    cy.screenshot({ capture: 'viewport' });
})
})
// CT014
Cypress.Commands.add('EscolherQuantidadeProdutoAcimaDoEstoque',function(){
    cy.get('#laptopsImg').click(); // clicar categoria
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click() // escolher produto
    cy.get('#Description > .roboto-regular').invoke('text').as('HP CHROMEBOOK 14 G1(ENERGY STAR') // qual foi
    cy.get('.BLACK').click() // escolher cor
    cy.get('.colorSelected').should('exist') // escolheu preto?
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type('14') // escolher qtd
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-valid').should('have.value', '14');
    cy.get('.fixedBtn > .roboto-medium').click();
    cy.wait(1300);
    cy.screenshot({ capture: 'viewport' });
    cy.get('#productProperties > label.ng-binding').invoke('text').as('Oops! We only have 10 in stock. We updated your order accordingly')
})  




// CT016

Cypress.Commands.add('PreencherDaosDoCartaoNumeroEmBranco',function(){
    cy.get('#shoppingCartLink').click();
    cy.get('#checkOutButton').click();
    cy.get('#userDetails > :nth-child(1) > .ng-binding').should('be.visible').invoke('text').as('Joao Silva');
    cy.get('[data-ng-show="user.address != \'\'"]').should('be.visible').invoke('text').as('Joao@Joao.com');
    cy.get('[data-ng-show="user.cityName != \'\'"]').should('be.visible').invoke('text').as('Osasco');
    cy.get('[data-ng-show="user.stateProvince != \'\'"]').should('be.visible').invoke('text').as('Sao Paulo');
    cy.get('[data-ng-show="user.zipcode != \'\'"]').should('be.visible').invoke('text').as('06436-860');
    cy.get('#userDetails > :nth-child(3) > .ng-binding').should('be.visible').invoke('text').as('11936564059');
    cy.get('.mobileBtnHandler > #next_btn').click();
    cy.get('[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input').click();
    cy.get('#creditCard').click();
    cy.get('[name="cvv_number"]').type('{backspace}')
    cy.get('label.invalid').should('be.visible');
    cy.get('label.invalid').invoke('text').as('Card number field is required')
    cy.get('.creditCard > .inputContainer > .ng-pristine').type('321')
    cy.get('[a-hint="MM"] > .inputContainer > .ng-pristine').select('06')
    cy.get('[a-hint="YYYY"] > .inputContainer > .ng-pristine').select('2030')
    cy.get('[a-hint="Cardholder name"] > .inputContainer > label').type('JoaoSilva');
    cy.get('.sec-sender-a.ng-scope.invalid').should('be.visible');  
    cy.screenshot();  
})
// CT017
Cypress.Commands.add('PreencherDaosDoCartao',function(){
    cy.get('#shoppingCartLink').click();
    cy.get('#checkOutButton').click();
    cy.get('#userDetails > :nth-child(1) > .ng-binding').should('be.visible').invoke('text').as('Joao Silva');
    cy.get('[data-ng-show="user.address != \'\'"]').should('be.visible').invoke('text').as('Joao@Joao.com');
    cy.get('[data-ng-show="user.cityName != \'\'"]').should('be.visible').invoke('text').as('Osasco');
    cy.get('[data-ng-show="user.stateProvince != \'\'"]').should('be.visible').invoke('text').as('Sao Paulo');
    cy.get('[data-ng-show="user.zipcode != \'\'"]').should('be.visible').invoke('text').as('06436-860');
    cy.get('#userDetails > :nth-child(3) > .ng-binding').should('be.visible').invoke('text').as('11936564059');
    cy.get('.mobileBtnHandler > #next_btn').click();
    cy.get('[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input').click();
    cy.wait(1000);
    cy.get('#creditCard').type('111122223333');
    cy.get('[name="cvv_number"]').type('3321');
    cy.wait(1000);
    cy.get('[a-hint="MM"] > .inputContainer > .ng-pristine').select('06')
    cy.get('[a-hint="YYYY"] > .inputContainer > .ng-pristine').select('2030')
    cy.wait(1000);
    cy.get('[a-hint="Cardholder name"] > .inputContainer > label').type('JoaoSilva');  
    cy.wait(1000);    
})
// CT017
Cypress.Commands.add('MenssagemCompraConcluida',function(){
    cy.get('#pay_now_btn_ManualPayment').click()
    cy.wait(2000); 
    cy.screenshot({ capture: 'viewport' });
})



Cypress.Commands.add('DeletarConta',function(){
    cy.get('.desktop-handler > :nth-child(3)').click();
    cy.wait(1000)
    cy.get('#loginMiniTitle > [translate="My_account"]').click()
    cy.wait(1000)
    cy.get('.select').should('be.visible');
    cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('MY ACCOUNT').then((texto)=>{
      console.log('Texto capturado', texto);
    })
    cy.get('.deleteMainBtnContainer').click(); 
    cy.get('.deleteRed').click()
    cy.wait(1000)
    cy.get('.successfulDeleteMessage > .deleteAccountPopupContent > p').invoke('text').as('Account deleted successfully').then((texto) =>{
      console.log('Texto capturado', texto);
    })
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });
})




Cypress.Commands.add('AcessarLoginParaDeletar',function(){
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.wait(1000);
    cy.get('.logoDemo').should("be.visible");
    cy.get("#menuUserLink").click(); // clicar no botao user
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
    cy.get('#sign_in_btn').click();    
})

Cypress.Commands.add('MenssagemContadeletada',function(){
    cy.get('#signInResultMessage').invoke('text').as('Incorrect user name or password.') 
    cy.wait(1000);
    cy.screenshot({ capture: 'viewport' });    
})







