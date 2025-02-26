//Expressão 1 - Inicialização da variável de controle

//Expressão 2 - Condição que define quando irá ocorrer a parada do for

//Expressão 3 - Variável de controle

// for (expressao 1; expressao 2; expressao 3) {

// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i)
// }

const prompt = require("readline-sync");

// let maiorNumero = 0;

// let numeroInformado;

// for (let i = 1; i <= 5; i++) {
//   numeroInformado = Number(prompt.question("Informe um númmero: \n"));

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado;
//   }
// }

// console.log(`O maior número é: ${maiorNumero}`);

// const nome = "Kaue Siqueira"

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i])
// }

const notasDoAluno = [10, 8, 5]

const numero = [1, 2, 3, 4, 5, 6]


//Mostra os números do index 0 a 2
console.log(numero.slice(0, 2))


//adicionar elementos no final
numero.push(10)

//adicionando elementos no começo
numero.unshift(60)

//removendo elementos no final do array
numero.pop()

//remover primeiro elemento
numero.shift()

console.log(numero)

//Como saber se algo esta dentro do array

console.log(numero.includes(20))

//Qual o indice do elemento?
//Se retornar -1 não existe
numero.indexOf(1)

//procura o ultimo elemento de possua aquele valor informado
numero.lastIndexOf(5)

console.log(numero)

console.clear()

//Percorrer arrays com for

const arr = [10, 20, 30, 40, 50]

for (let i = 0; i <= arr.length; i++) {
  console.log(i, arr[i])
}

console.clear()

// for-of
//Percorrer os elementos de um objeto - Array é um obj

for (const elemeto of arr) {
  console.log(elemeto)
}

console.clear()

//for in
//percorre as propriedades, os indices do array - objeto

for (const indice in arr) {
  console.log(indice)
}

