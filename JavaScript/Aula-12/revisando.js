//Revisando MAP
//Percorre o array e cria um outro array a partir do original; Retorna um novo array transformado com o mesmo tamanho do array original
//composto pelos elementos que foram retornados a cada iteração.

const numeros = [10, 23, 503, 6, 60, 5.6, 65];

const newArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});

//Para cada valor me retorne o valor ao quadrado
const numerosElevados = numeros.map((valor) => {
  return valor ** 2;
});

console.log(numerosElevados);

console.clear();

//Exercicios MAP

//1 Dobrar números

let numeross = [1, 2, 3, 4, 5];

let numerosElevadosQ = numeross.map((valor) => {
  return valor * 2;
});

console.log(numerosElevadosQ);

//2 - Converter para String

let numerosString = [10, 20, 30, 40, 50];

let numerosToString = numerosString.map((numero, index) => {
  return `Número: ${numero}`;
});

console.log(numerosToString);

console.clear();

//3 - Transformando em maiúsculas

let frutas = ["maça", "banana", "uva"];

let frutasToUpperCase = frutas.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutasToUpperCase);

//4 - Extraindo dados

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 },
];

let pessoasNames = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(pessoasNames);
console.clear();

//5 - Formatar preços

let precos = [5, 10, 15, 20];

let precosTransform = precos.map((preco) => {
  return `R$ ${preco.toString()},00`;
});

console.log(precosTransform);
console.clear();

//6 - quadrado dos números

let numerosAoQuadrado = [2, 4, 6, 8];

console.log(
  numerosAoQuadrado.map((numero) => {
    return numero ** 2;
  })
);

// 7 - Primeira letra de cada palavra

let palavras = ["cachorro", "gato", "elefante"];

console.log(
  palavras.map((palavra) => {
    return palavra[0];
  })
);

// 8 - Frase com dados

const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 60 },
  { nome: "Tênis", preco: 120 },
];

console.log(
  produtos.map((produto) => {
    return `O produto ${produto.nome} custa R$ ${produto.preco}`;
  })
);
