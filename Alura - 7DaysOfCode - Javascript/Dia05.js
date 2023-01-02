let intens = [];

let escolha = window.prompt("Adicionar item? 1 - SIM ou 2 - NÃO");

//while

if (escolha == 1) {
    nomeItem = window.prompt("Qual item deve ser adicionado?");
    intens.unshift(nomeItem);
}

else {
    window.alert(`${intens}`);
}