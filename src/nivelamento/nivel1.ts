// formas de tipar
// forma 1
let idade:number;
// forma 2
const nome = 'Seu Zezo';
// forma 3 não recomendado por ser redundante
const sobrenome:string = 'da Silva';
// tipagens especiais
type usuario = {'nick': string, 'age':number}
// chamando type novo
let jogador:usuario = {nick: 'Ricardo', age: 18};

let jogadorvelho:usuario = {nick:'Toin', age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`✅ Acesso liberado: O Jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso joguinho muito massa 🔫!`)
    }else{
        console.log(`EI ${usuarioAtual.nick} É de menor, não pode ta jogando pei pei nao tem so ${usuarioAtual.age} anos um bebê 👶`);
    }
};
verificarIdade(jogador);
verificarIdade(jogadorvelho)