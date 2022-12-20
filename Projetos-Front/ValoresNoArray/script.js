let numInput        = document.querySelector('input.iptValor');
let numInSelects    = document.querySelector('select.iptLista');
let mostre          = document.querySelector('div#exibibe');
let arrayValores    = [];

function isValido(p_num) {

    let val = false;
    if (Number(p_num) >= 1 && Number(p_num) <= 100) {
        val = true;
    }
    return val;
}

function inLista(p_num, p_lista) {

    let val = false;
    if (p_lista.indexOf(Number(p_num)) != -1) {
        val = true;
    }
    return val;
}

function adicionar() {

    if (isValido(numInput.value) && !inLista(numInput.value, arrayValores)) {
        arrayValores.push(Number(numInput.value));
        
        let item = document.createElement('option');
        item.innerText = (`${numInput.value} add.`);
        
        numInSelects.appendChild(item);

        //Limpa a tela quando +1 é add.
        mostre.innerHTML = "";
    }
    else {
        window.alert(" ERRO : Valor inválido ou já adicionado")
    }
    //Apaga o valor no input
    numInput.value = "";
    numInput.focus();
}

function finalizar() {
    if (arrayValores.length == 0) {
        window.alert("Adicione valores!!");
    }

    else {

        let totNum  = arrayValores.length;
        let maior   = arrayValores[0];
        let menor   = arrayValores[0];
        
        for (let i in arrayValores) {
            if (arrayValores[i] > maior) {
                maior = arrayValores[i];
            }
            
            if (arrayValores[i] < menor) {
                menor = arrayValores[i];
            }
        }
        
        mostre.innerHTML = "";
        mostre.innerHTML += `<p>Maior: ${maior}</p>`;
        mostre.innerHTML += `<p>Menor: ${menor}</p>`;
        mostre.innerHTML += `<p>Total de itens salvos: ${totNum}.</p>`;
    }
}