// Todos são tipos primitivos, exceto o objeto

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

console.log(typeof simbolo);

var time = null;
console.log(typeof time); // object

// String 
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gol = 1000;
var frase = 'Romário fez ' + gol + ' gols';
console.log(frase);

// backslash 
var frase2 = 'Esse é o \'melhor\' jogo';
console.log(frase2);
// o backslash '\' é utilizado para "cancelar" o efeito de um caractere especial

// Template String

var gols = 1000;
var frase3 = `Romário fez ${gols} gols`;
console.log(frase3);