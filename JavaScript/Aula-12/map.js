//map: Cria um novo array com o mesmo tamanho do array original composto pelos elementos que foram retornados a cada iteração

//Array original
let numeros = [10, 20, 30, 40, 50];

//Novo array
const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});

//Array original
console.log(numeros);

//Novo array com base no original
console.log(novoArray);

console.clear();

//Números ao quadrado com Map

//Array original
let valores = [10, 20, 30, 40, 50];

//Array novo com base no original
const valoresAoQuadrado = valores.map((valor) => valor ** 2);

//Array original
console.log(`Array original: ${valores}`);

//Array novo com Map
console.log(`Array novo com map: ${valoresAoQuadrado}`);

console.clear();

//Desestruturação, exemplo

const pessoa = {
  nome: "Kaue",
  idade: 28,
  altura: 1.7,
};

const pessoaComPeso = {
  ...pessoa,
  peso: 52,
};

console.log(pessoaComPeso);

//Exemplo Map

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 5 },
  { produto: "Arroz", preco: 54.99, quantidade: 2 },
  { produto: "Leite 1L", preco: 7.99, quantidade: 5 },
];

const carrinhoTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco.toFixed(2) * itemDoCarrinho.quantidade.toFixed(2),
  };
});

console.log(carrinhoTotal);
