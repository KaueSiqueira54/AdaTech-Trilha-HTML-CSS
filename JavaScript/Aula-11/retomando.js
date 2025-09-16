//Array.forEach()

const numeros = [10, 20, 30, 40, 50, 60];

numeros.forEach((element, index) => {
  console.log(`Index: ${index} Número: ${element}`);
});

//Array.prototype.find();
//Utíl para encontrar um elemento em um array de números

// numeros.find((item, index, arraycompleto) => {}
//
// })

const encontrado = numeros.find((numero) => {
  return numero != 10 && numero > 50;
});

console.clear();
console.log(encontrado);

//Encontre um número igual a 10 - comparação para encontrar algo

//Outro exemplo

const pessoas = [
  {
    nome: "Kaue",
    idade: 20,
    altura: 1.56,
  },
  {
    nome: "Pessoa 02",
    idade: 25,
    altura: 1.76,
  },
  {
    nome: "Pessoa 03",
    idade: 28,
    altura: 1.16,
  },
  {
    nome: "Pessoa 04",
    idade: 27,
    altura: 1.86,
  },
];

const pessoa = pessoas.find((pessoa) => {
  return pessoa.idade > 25 && pessoa.altura > 1.5;
});

console.log(pessoa);
console.clear();

//Array.prototype.findIndex()
//Muito parecido com o find, mas retorna o index do elemento

const indicePessoa = pessoas.findIndex((indice) => {
  return pessoa.idade < 25;
});

console.log(indicePessoa);

console.clear();

//Exemplo MAP - 2

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const carrinhoToal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoToal);

//Desestruturação ou spread (operator)

const pessoaComPeso = {
  ...pessoa,
  peso: 89,
};

console.clear();

//Filter

let numerosFilter = [10, 23, 60, 654, 90, 8, 15, 14, 52];

