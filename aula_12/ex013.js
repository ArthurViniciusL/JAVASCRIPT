let agora = new Date();
let diaSemana = agora.getDay(); //Os dias começam em 0;
console.log(`Dia : ${diaSemana}`);

switch (diaSemana) {
    case 0:
        console.log("- Bom domingo.");
        break;
    case 1:
        console.log("- Boa segunda-feira.");
        break;
    case 2:
        console.log("- Boa terça-feira.");
        break;
    case 3:
        console.log("- Boa quarta-feira.");
        break;
    case 4:
        console.log("- Boa quinta-feira.");
        break;
    case 5:
        console.log(- "Boa sexta-feira.")
        break;
    case 6:
        console.log("- Bom sábado.")
        break;

    default:
        console.log("- [ERRO] Dia inválido");
        break;
}