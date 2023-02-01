
function validarMensagemDeErro(mensagem){
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, mensagem);
}

function fecharMensagemDeErro(){
  Aliases.lojinha.dlgLojinha.btnOK.ClickButton();
}
module.exports.validarMensagemDeErro = validarMensagemDeErro;
module.exports.fecharMensagemDeErro = fecharMensagemDeErro;