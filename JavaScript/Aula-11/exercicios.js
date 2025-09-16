//Exercicios com ForEach()

//1 - Imprimir números:
//Dado o array [1, 2, 3, 4, 5], use forEach para imprimir cada número no console.

let numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
  console.log(numero);
});

console.clear();

// 2 - Somar valores:
// Dado o array [10, 20, 30, 40], use forEach para calcular a soma de todos os elementos.

let numerosSoma = [10, 20, 30, 40];

soma = 0;

numerosSoma.forEach((numero) => {
  console.log((soma += numero));
});

console.clear();

//3 - Exibir com índice:
// Dado o array ["a", "b", "c", "d"], use forEach para imprimir cada elemento junto com o índice, no formato "Índice X: valor".

let letras = ["a", "b", "c", "d"];

letras.forEach((letra, indice) => {
  console.log(`Indice: ${indice}: valor: ${letra}`);
});

console.clear();

// Multiplicar por 2:
// Dado o array [2, 4, 6, 8], use forEach para imprimir no console cada número multiplicado por 2.

let numbers = [2, 4, 6, 8];

numbers.forEach((numero) => {
  console.log(`Número: ${numero} * 2 = ${numero * 2}`);
});

console.clear();
// Listar nomes:
// Dado o array de objetos:

// const pessoas = [
//   { nome: "Ana", idade: 20 },
//   { nome: "Carlos", idade: 25 },
//   { nome: "Maria", idade: 30 }
// ];

// Use forEach para imprimir frases no formato: "Ana tem 20 anos".

let names = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 },
];

names.forEach((nome) => {
  console.log(`${nome.nome} tem ${nome.idade} anos.`);
});
