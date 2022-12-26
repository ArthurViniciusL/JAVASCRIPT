let escolha = window.prompt("Você quer ir para Front-end ou Back-end?").toLowerCase();
let framework;
let seguirOuParar;
let outraEscolha;

if (escolha == "front-end") {
    framework = window.prompt("Você quer aprender React ou Vue?");
}

else if (escolha == "back-end") {
    framework = window.prompt("Você quer aprender C# ou Java?");
} 

seguirOuParar = window.prompt("Você deseja parar ou quer virar Fullstack?");

outraEscolha = window.prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 - Sim ou 2 - Não");

while (outraEscolha != 2) {
    window.prompt("Me conta qual: ");
    outraEscolha = window.prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 - Sim ou 2 - Não");

}

/*function escolhaUmaArea() {
    let escolha = window.document.getElementsByName('area');
    let areaEscolhida = null;

    if (escolha[0].checked) {
        areaEscolhida = "Front-End";
        //TODO
    }

    else {
        areaEscolhida = "Back-End";
                //TODO
    }
} */