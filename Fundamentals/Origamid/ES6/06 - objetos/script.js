var quadrado = {
  lado: 4,
  area: function (lado) {
    return lado ** 2;
  },
};

console.log(quadrado.area(5));

var triangulo = {
  lado: 2,
  area: (lado) => {
    return lado * 3;
  },
};

var objeto = {
  nome: "teste",
  valor: 10,
  qnt: 20,
};

objeto.cor = "azul";
objeto.sabor = "morango";

console.log(objeto);

var valor = 100;
var Coisa = {
  nome: "teste",
  valor: 10,
  qnt: 20,

  metadeValor: () => {
    return this.valor / 2; // O this informa que será utilizado a prop valor dentro do objeto Coisa.
  },
};

var cachorro = {
    raça: "labrador",
    idade: 10,
    latir(generoPessoa) {
       return (generoPessoa === 'homem') ? 'latir' : 'ignorar'
    } 
}

console.log(cachorro.latir('homem'));