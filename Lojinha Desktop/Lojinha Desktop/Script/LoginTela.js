function abrirLoginha() {
  TestedApps.Lojinha.Run();
  
}

function login(usuario, senha){
 //Clicando na aba de login
 Aliases.Lojinha.frmPrincipal.pageControl1.ClickTab("LOGIN");
 //preenchendo formulario de login
 let formularioLogin = Aliases.Lojinha.frmPrincipal.pageControl1.TabSheet1;
 formularioLogin.edtUsuario.SetText(usuario);
 formularioLogin.edtSenha.SetText(senha);
 formularioLogin.btnEntrar.Click();
 
}
module.exports.abrirLoginha = abrirLoginha;
module.exports.login = login;