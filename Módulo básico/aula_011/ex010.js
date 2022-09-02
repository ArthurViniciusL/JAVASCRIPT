function calcular(  p_txtv = window.document.getElementById("txt_vel"),
                    p_res = window.document.querySelector('div#resposta')) {

    let velocidade = Number(p_txtv.value);
    let resposta = p_res;

    resposta.innerHTML = `<p> Sua velocidade atual é de <strong>${velocidade}</strong> . </p>`;

    if (velocidade > 60) {
        resposta.innerHTML += `<p> Multado! </p>`;
    }

    resposta.innerHTML += `<p> Dirija com cuidado </p>`;
}

/*
function calcular() {
    var txt_vel = window.document.getElementById("txt_vel");
    var resposta = window.document.querySelector('div#resposta');
    var vel = Number(txt_vel.value);

    resposta.innerHTML = `<p> Sua velocidade atual é de <strong>${vel}</strong> . </p>`;

    if (vel > 60) {
        resposta.innerHTML += `<p> Multado! </p>`;
    }

    resposta.innerHTML += `<p> Dirija com cuidado </p>`;
}  */