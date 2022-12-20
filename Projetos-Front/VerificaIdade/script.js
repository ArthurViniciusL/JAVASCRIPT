function verificar() {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoForm = window.document.getElementById('txtano');
    let res = window.document.querySelector('div#res');

    if (anoForm.value.length == 0 || Number(anoForm.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados.");
    }
    else {
        let sexForm = window.document.getElementsByName('radsex'); //[0] [1]
        let idade = anoAtual - Number(anoForm.value);

        //Criando a imagem dinamicamente:
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

        let genero = null;

        if (sexForm[0].checked) {
            genero = "Homem";

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', )
            }

            else if (idade < 21) {
                //XÔvem
            }

            else if (idade < 50) {
                //adulto
            }

            else {
                //idoso
            }

        }

        else {
            genero = "Mulher";

            if (idade >= 0 && idade < 10) {
                //kid
            }

            else if (idade < 21) {
                //XÔvem
            }

            else if (idade < 50) {
                //adulto
            }

            else {
                //idoso
            }
        } //Nesse caso o uso direto do else é válido porque estou lidando apenas dois tipos de genero;

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`;
    }

}