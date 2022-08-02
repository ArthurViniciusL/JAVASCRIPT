

function calcular(p_txtv = window.document.getElementById("txt_vel"), p_res = window.document.querySelector('div#resposta')) {


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
    var txtv = window.document.getElementById('txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtv.value);

    res.innerHTML = `<p> Sua velocidade atual é de <strong>${vel}</strong> . </p>`;

    if (vel > 60) {
        res.innerHTML += `<p> Multado! </p>`;
    }

    res.innerHTML += `<p> Dirija com cuidado </p>`;
}
*/