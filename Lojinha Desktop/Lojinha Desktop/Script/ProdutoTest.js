var LoginTela = require("LoginTela");
var ListaProdutoTela = require("ListaProdutoTela");
var NovoProdutoTela = require("NovoProdutoTela");
var MensagemTela = require("MensagemTela");
var FormularioPrincipalTela = require("FormularioPrincipalTela");

function testValidarValoresInvalidosDoProduto()
{
  LoginTela.abrirLoginha();
  LoginTela.login("admin", "admin");
  ListaProdutoTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "000", "preto", "vermelho");
  MensagemTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagemTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLoginha();
  

}

function testValidarValoresSeteMilInvalidosDoProduto()
{
  LoginTela.abrirLoginha();
  LoginTela.login("admin", "admin");
  ListaProdutoTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "000", "preto", "vermelho");
  MensagemTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagemTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLoginha();
  

}