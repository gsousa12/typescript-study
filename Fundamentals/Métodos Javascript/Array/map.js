// O método map chama a função callback recebida por parâmetro para cada
// elemento do Array original, em ordem, e constrói um novo array com base
// nos retornos de cada chamada.

// Sintaxe básica:
// arr.map(callback[,thisArg]);

// callback -> função cujo return produz o elemento do novo array.
//             Recebe 3 argumentos:
//             1 - valorAtual
//             2 - indicie
//             3 - array
// thisArg -> opcional. Valor a ser utilizado como o this no momento da execução
// da função callback.

const array1 = [1, 2, 3, 4];

const map1 = array1.map((x) => x * 2);
console.log(map1);
console.log(array1);

// Exemplo: Mapeando um array de números para um array de raízes quadradas

var numbers = [1, 4, 9];

var roots = numbers.map(Math.sqrt);
console.log(roots);

// Exemplo: Mapeando um array de números usando uma função callback que contém
// um argumento

var numbers = [1, 2, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

// Exemplo: usando map genericamente

// Esse exemplo demonstra como usar o map em um String para
// recuperar a representação em ASCII de cada caracter em um
// array de bytes:

var map = Array.prototype.map;
var a = map.call("Hello World", function (x) {
  return x.charCodeAt(0);
});
console.log(a);

// Exemplo: Usando map para inverter uma string

var str = "TESTE MALUCO";
var reverse = [].map
  .call(str, function (x) {
    return x;
  })
  .reverse()
  .join("");
console.log(`string invertida = ${reverse}`);
