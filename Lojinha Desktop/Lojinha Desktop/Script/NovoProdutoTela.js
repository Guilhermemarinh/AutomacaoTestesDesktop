function submeterNovoProdutoComErro(nome, valor, cores){
  //preencher os dados do produto
  let formularioAdicaoProduto = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet3.Panel6
  formularioAdicaoProduto.edtNovoNomeProduto.SetText(nome);
  formularioAdicaoProduto.edtNovoValorProduto.SetText(valor);
  formularioAdicaoProduto.edtNovoCoresProduto.SetText(cores);
  
  //pressionaro botao de adicao
  formularioAdicaoProduto.btnSalvarProduto.Click();
}
module.exports.submeterNovoProdutoComErro = submeterNovoProdutoComErro;