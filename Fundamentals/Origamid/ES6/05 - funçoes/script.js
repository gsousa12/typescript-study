function areaQuadrado(l) {
    return l * l;
}

console.log(areaQuadrado(14)); // 196
console.log(areaQuadrado(2)); // 4
console.log(areaQuadrado(9)); // 81

function pi() {
    return 3.14;
}

console.log(areaQuadrado(pi())) // 3.14 * 3.14 = 9.8596

function imc (peso, altura) {
    var imc = peso / (Math.pow(altura, 2));
    return imc;
}

console.log (imc(80, 1.80)); // 24.69

// Hoiisting
imc2(80, 1.80);

function imc2 (peso, altura) {
    var imc = peso / (Math.pow(altura, 2));
    console.log(imc);
}