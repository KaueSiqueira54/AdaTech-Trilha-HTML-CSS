const prompt = require("readline-sync");

const nota1 = 10;
const nota2 = 2;

const mediaDoAluno = (nota1 + nota2) / 2;

console.log(`A soma das notas é: ${mediaDoAluno}`);

const numero = 16;

console.log(`A raiz é: ${Math.sqrt(numero)}`);

const idade = prompt.question("Qual é a sua idade?");

let idadeNumber = Number(idade);

console.log(`Sua idade é: ${idadeNumber}`, typeof idadeNumber);
