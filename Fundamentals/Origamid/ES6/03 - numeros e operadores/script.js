var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var soma = '100' + 50; // 10050 houve uma concatenação
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200 houve uma conversão para number
var divisao = '10' / 2; // 5 houve uma conversão para number
console.log(divisao); // 5 
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
console.log(divisao); // NaN

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50 foi priorizado a operação dentro do parenteses
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento = 5;
console.log(++incremento); // 6
console.log(incremento); // 6

var frase = 'Isso é um teste';
++frase; // NaN
--frase; // NaN

var idade = '10';
console.log(idade + 5); // 105 houve uma concatenação

var idade = '10';
console.log(+idade + 5); // 15 o sinal de + converte a string para number

// crie duas expressões que retornem NaN

var stringer = 'teste';
console.log(stringer / 2); // NaN
console.log()

// somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;