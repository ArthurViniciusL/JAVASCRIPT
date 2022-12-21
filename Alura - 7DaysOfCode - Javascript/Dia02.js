let dataAtual = new Date().getFullYear()
let nomeUser;
let idadeUser;
let linguagemUser;

nomeUser = window.prompt("Qual o seu nome?");
idadeUser = window.prompt("Qual o seu ano de nascimento?");
linguagemUser = window.prompt("Qual linguagem você está estudando atualmente?")

window.alert(`Olá, ${nomeUser}. Você tem ${dataAtual - idadeUser} anos e está apredendo ${linguagemUser}`);

opniao = window.prompt(`Você está gostando de estudar ${linguagemUser}? 1 - [SIM] ou 2 - [NÃO]`);

if (opniao == 1) {
    window.alert("Muito bom! Continue estudando e você terá muito sucesso.");    
}

else {
    window.alert("Ahh que pena... Já tentou aprender outras linguagens?")
}