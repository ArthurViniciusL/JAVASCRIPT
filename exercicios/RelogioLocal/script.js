function carregar() {
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementsByClassName("imagem");
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minuto}`;

    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning-pexels-artur-roman-1167355.png';
        document.body.style.background = '#f8d061'
    }

    else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon-pexels-george-desipris-858241.png';
        document.body.style.background = '#E9A66F'
    }
    
    else {
        img.src = 'img/night-pexels-pixabay-355465.png';
        document.body.style.background = '#151520'
    }

}


