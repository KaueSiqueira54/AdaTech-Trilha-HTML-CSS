//every(): Verfifica se todos os elementos de um array seguem determinada condição retornada pela função

//A condição precisa ser verdadeira para todos os elementos do array, se um não satisfazer, retorna false, se todos satisfazerem, retorna true

const numeros = [10, 20, 30, 40, 50];

const positivos = numeros.every((elemento) => elemento > 0);

console.log(positivos);

console.clear();

//Exemplo Object

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

const maioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 15);

console.log(maioresDeIdade);

console.clear();

//some(): Verifica se algum elemento do array torna verdadeira uma determinada condição retornada pela função

const numeros2 = [-1, -5, -6, -9];

const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno);

//Se uma das condições for satisfeita, retorna true, mesmo que todas as outras sejam falsas, basta uma ser verdadeira para ser true

console.clear()


