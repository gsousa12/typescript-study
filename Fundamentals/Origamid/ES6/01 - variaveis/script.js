var nome = "teste";
let idade = 11;
const isTrue = true;

console.log(nome, idade, isTrue);

var sobrenome = "sousa",
  cidade = "são paulo";
console.log(sobrenome, cidade);

var semDefinir; //undefined
console.log(semDefinir);

// Case sensitive
var teste = "teste";
var Teste = "teste";
console.log(teste, Teste);

// Hoisting
console.log(testeHoisting); // undefined
var testeHoisting = "testeHoisting";

var alteracao = "alteracao";
var alteracao = "alteracao2";
console.log(alteracao);

let alteracaoLet = "alteracaoLet";
alteracaoLet = "alteracaoLet2"; // não pode redeclarar com let
console.log(alteracaoLet);


