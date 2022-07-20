var n1 = 10.328424;
console.log("> Original: " + n1 + ".");

console.log(`> Formtando casas: ${n1.toFixed(2)}.`);

console.log(`> Trocando o ponto: ${n1.toFixed(2).replace(".", ",")}.`);

console.log(`> Mosntrando o simbolo monetario local: ${n1.toLocaleString("pt-br", {
    style: "currency", currency: "BRL"
})
    }.`);
console.log(`> Mosntrando o simbolo monetario local: ${n1.toLocaleString("pt-br", {
    style: "currency", currency: "USD"
})
    }.`);
console.log(`> Mosntrando o simbolo monetario local: ${n1.toLocaleString("pt-br", {
    style: "currency", currency: "EUR"
})
    }.`);

    