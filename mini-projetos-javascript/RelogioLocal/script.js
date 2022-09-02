function carregar() {
    let mensagem = window.document.getElementById("msg");
    let sadacao = window.document.getElementById("saud");
    let img = window.document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    mensagem.innerHTML = `Agora são ${hora}:${minuto}`;

    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning-pexels-artur-roman-1167355.png';
        document.body.style.background = '#E2D0A6';
        sadacao.innerHTML = "Bom dia."
    }

    else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon-pexels-george-desipris-858241.png';
        document.body.style.background = '#E9A66F';
        sadacao.innerHTML = "Boa tarde."
    }
    
    else {
        img.src = 'img/night-pexels-pixabay-355465.png';
        document.body.style.background = '#151520';
        sadacao.innerHTML = "Boa noite."
    }

}


