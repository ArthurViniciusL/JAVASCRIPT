function contar() {
    let inicio = window.document.getElementById("ini");
    let fim = window.document.getElementById("fim");
    let pulos = window.document.getElementById("pulos");

    let resultdo = window.document.getElementById("result");
    
    if (inicio.value.length == 0 || fim.value.length == 0|| pulos.value.length == 0) {
        window.alert("ERRO: Faltam dados");
        resultdo.innerHTML = ("Impossível contar");
    }

    else {
        inicio  =   Number(inicio.value);
        fim     =   Number(fim.value);
        pulos   =   Number(pulos.value);
        
        resultdo.innerHTML = ("Contando: ");

        
        if (inicio < fim) {
            
            let i = inicio;
            while (i <= fim) {
                resultdo.innerHTML += ` \u{1F449} ${i}`;
                i += pulos;
            }
        }
        
        else {
            
            let i = inicio;
            while (i >= fim) {
                resultdo.innerHTML += ` \u{1F449} ${i}`;
                i -= pulos;
            }
        }
        resultdo.innerHTML += `\u{1F3C1}`;
    }    
}