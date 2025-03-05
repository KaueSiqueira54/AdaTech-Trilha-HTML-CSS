//Filter()
//Filtra todos os valores em um array, que satisfaz a condição.
//Sempre retorna um array de tamanho igual ou inferior ao array original
//map: Sempre retorna um array de tamanho igual ao original

const valores = [10, 20, 30, 34, 50, 24, 58, 65, 36, 100];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

// Exemplo 02

const alunos = [
  { nome: "Kaue", media: 10 },
  { nome: "Irineu", media: 3 },
  { nome: "Caio", media: 5 },
  { nome: "Milena", media: 2 },
];

const calc = alunos.filter((aluno) => aluno.media >= 5);

console.log(calc);

//Exemplo 02

const produtos = [
  { nome: "Suco", preco: 8.5, tipo: "Bebida" },
  { nome: "Batata", preco: 9, tipo: "Comida" },
  { nome: "Pizza", preco: 59, tipo: "Comida" },
  { nome: "Coca", preco: 59, tipo: "Bebida" },
  { nome: "Chocolates", preco: 59, tipo: "Comida" },
];

const tipos = produtos.filter((tipoDeProduto => tipoDeProduto.preco > 10 && tipoDeProduto.tipo !== 'Comida'))

console.log(tipos)

