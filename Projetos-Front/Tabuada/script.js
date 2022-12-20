function tabuada() {
    let numero = window.document.getElementById("txtn");
    let tabuada = window.document.getElementById("set_lab");

    if (numero.value.length == 0) {
        window.alert("ERRO : Insira um valor válido");
    }
    
    else {
        numero = Number(numero.value);

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            let mult = numero * i;
            item.text = (`${numero} x ${i} = ${mult}`);
            item.value = (`tab${i}`)
            tabuada.appendChild(item);
        }
    }
}