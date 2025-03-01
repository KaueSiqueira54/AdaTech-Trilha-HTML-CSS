//Funções de Alta Ordem Arrays

// * Array ForEach()

const numeros = [10, 20, 30, 40, 50];

numeros.forEach((value, index, arrayCompleto) => {
  console.log(index, value, arrayCompleto);
});

// *Array Find() útil para encontrar um elemento dentro de um array

console.clear();

const encontrados = numeros.find((numero) => {
  return numero < 30 && numero > 10;
});

console.log(encontrados);

// *Array de Objetos

const pessoas = [
  {
    nome: "Pessoa1",
    idade: 15,
  },
  {
    nome: "Pessoa2",
    idade: 25,
  },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 10);

console.log(pessoaEncontrada);

console.clear()

// 3 findIndex() Retorna o indice do elemento encontrado, muito parecido com o find()

let indiceDaPessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade > 10);

console.log(indiceDaPessoaEncontrada);


