var x;
var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('É verdadeiro');
    x = 10;
} else {
    console.log('É falso');
}

console.log(x); // 10

var nome = "gabriel"
if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

// Falsy

// if(false)
// if(0) ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') ou "" ou ``

11 == '11'; // true
11 === '11'; // false Pois o tipo é diferente, um é number e o outro é string

true && true; // true
true && false; // false
false && true; // false
'gato' && 'cão'; // 'cão'
(5 - 5) && (5 + 5); // 0
'gato' && false; // false
(5 >= 5) && (3 < 6); // true