let contador_1 = 0;
while (contador_1 < 7) {
    console.log(`${contador_1} - Oi!`);

    //contador++;
    contador_1 += 1;
}

console.log("---------------------------------------------");

let contador_2 = 0;
do {
    console.log(`${contador_2} - Oi!`);
    contador_2 += 1;
} while (contador_2 < 7);

console.log("---------------------------------------------");

let myArray = [1,2,3];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element + 2);
}

console.log("---------------------------------------------");

let contador_4 = 0;
myArray.forEach(element => {
    console.log(element);
});
