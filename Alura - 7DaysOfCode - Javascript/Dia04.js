let aleatorio = parseInt(Math.random() * (10 - 0) - 0);
console.log(aleatorio);

let i = 0;
let tentativas = 2;

for (let i = 0; i < 3; i++) {
    console.log(i)
    let chute = window.prompt("Chute um valor: ");
    
    if (chute == aleatorio) {
        window.alert("Parabéns!!!");
        i = 3;
    }

    else {
        console.log(`Errou!!! Você tem mais ${tentativas} tentativas`);
        if (tentativas == 0) {
            break;
        }
        tentativas--;
    }    
}

window.alert("Fim");