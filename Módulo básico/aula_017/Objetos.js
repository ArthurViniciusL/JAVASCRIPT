let pessoa = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p_peso = 0) {
        console.log("Engordou");
        this.peso += p_peso; 
    }
};

console.log(pessoa);
pessoa.engordar(5);
console.log(pessoa);