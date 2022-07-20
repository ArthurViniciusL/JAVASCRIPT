//declarando uma função

//sem retorno e sem parâmetro
function olaMundo() {
    console.log("Olá, mundo")
}
//chamando a função
olaMundo()

function helloFulano(nome) {
    //console.log("Olá, " + nome)
    console.log(`Olá, ${nome}`)
}
helloFulano("Arthur")

function retornOlaFulano(nome) {
    return `Olá, ${nome}`
}
let texto = retornOlaFulano("Arthur")
console.log(texto)