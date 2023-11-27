
/// <reference types="Cypress" />

describe('home page', ()=>{
    
    beforeEach(function() {
        cy.viewport(1280, 880)
    })


    it ('criar Pasta')

    //it.only('site', () => {
     //cy.visit('https://advantageonlineshopping.com/#/');        
     //});
        it('CT001 - Validar registro com dados válidos', () => {
            cy.AcessarTelaDeCadastro();
            cy.CadastrarUsuario();
            cy.VerificarSeUsuarioEstarLogado();         
         });
        it('CT002 - Validar registro do email com dados em branco(negativo)', ()=>{
            cy.AcessarTelaDeCadastro();
            cy.CadastrarUsuarioComEmailEmBranco();  
         })
        it('CT003 - Validar registro com dados validos existente(negativo)', ()=>{
            cy.AcessarTelaDeCadastro();
            cy.CadastrarUsuarioExistente(); 
          })
        it('CT004 - Validar login com dados validos', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.VerificarSeUsuarioEstarLogado();
          })
        it('CT005 - Validar login com senha inválida(negativo)', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComSenhaInvalida();
          })
        it('CT006 - Validar login com nome de usuario em branco(negativo)', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComUsuarioEmBranco();  
        })
        it('CT007 - Validar login com senha em branco(negativo)',()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComSenhaEmBranco();
        })
        it('CT012 -Remover produto do carrinho ', ()=> {
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.RemoverProdutoDoCarrinho();   
        })
        it('CT013 - Validar produto no carrinho', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.RealizarEnvioDoPordutoNoCarrinho();   
        })
        it('CT014 - Validar quantidade do produto (Negativo)', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.EscolherQuantidadeProdutoAcimaDoEstoque();   
        })
        it('CT016 - Validar cartao com dados em branco (Negativo)', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.PreencherDaosDoCartaoNumeroEmBranco();
        })
        it('CT017-Validar dados do cartao (Positivo)', ()=> {
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.PreencherDaosDoCartao();
            cy.MenssagemCompraConcluida();
        })
        it('CT021 - Validar exclusao de conta', ()=>{
            cy.AcessarTelaDeLogin();
            cy.RealizarLoginComNomeESenhaDoUsuario();
            cy.DeletarConta();
        });
        it('CT022 - Validar conta excluida', () => {
            cy.AcessarLoginParaDeletar();
            cy.MenssagemContadeletada();
        });
})