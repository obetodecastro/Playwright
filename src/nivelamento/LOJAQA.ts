type Produto = {
  nome: string;
  quantidade: number;
};
const produto1: Produto = {
  nome: "Nescau",
  quantidade: 15,
};
const produto2: Produto = {
  nome: "Toddy",
  quantidade: 170,
};
function verificarEstoque(prod: Produto){
    const resultado=prod.quantidade<50
    ?`Atenção: ${prod.nome} precisa 'repor estoque' (${prod.quantidade} unidades)`
    :`Estoque regular para ${prod.nome} (${prod.quantidade} unidades).`
    console.log(resultado)
}
verificarEstoque(produto1)
verificarEstoque(produto2)