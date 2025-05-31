let numero = 20; // Inferência de tipo

// const pi = 3.1415;

// let nome: string = "Kauê";

// let correto: boolean;

// correto = false;

// let resultado = numero * pi;

// const nomeDoUsuario = prompt("Qual o seu nome??");

// console.log(nomeDoUsuario?.toLocaleLowerCase());

//Array de números do tipo número
//Versão mais antiga de tipar o array
//Evitar o tipo ANY SEMPRE - Array de Qualquer coisa
const numeros: Array<number> = [1, 2, 3, 4, 5];

//Array unionTypes - Array de números e string - EVITAR NÂo indicado
// const misto: (number | string)[] = ["Kaue", 18, 1.6];

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(16);

const menorIdade = idades.filter((idades) => idades <= 18);

console.log(menorIdade);

//Tuplas - Conjunto de valores que está dentro de um array

const pessoaTupla: [string, number] = ["Kaue", 18];

//Object Types

//Types

type Person2 = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

//Interface

//Interface mais ligado a POO - Modelagem de classes

//Interface Person - Modelagem de uma pessoa, toda pessoa precisa ter nome, etc. chave sempre o tipo e o nome o mesmo que se deseja no objeto
interface Person {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
  //Profissão é opcional, não obrigatória
}

//Objeto
const pessoa: Person = {
  nome: "Kaue",
  idade: 18,
  altura: 1.7,
  profissao: "dev",
};

const pessoa2: Person = {
  nome: "Lucas",
  altura: 1.54,
  idade: 19,
};

console.log(pessoa, pessoa2);

//Type aliases - Apelido para os criterios
type Criterio = 'gretar' | 'lower'

//Union Types

function choseNumber(numero1: number, numero2: number, Criterio?: 'greater' | 'lower'): number {
  const numeroAleatório = Math.random();

  switch(Criterio) {
    case 'greater':
      return numero1 > numero2 ? numero1 : numero2;
    case 'lower':
      return numero1 < numero2 ? numero1 : numero2;
    default:
      if (numeroAleatório >= 0.5) return numero1;
      return numero2;
  }
}

const numeroAl = choseNumber(10, 20, "greater");

console.log(numeroAl)

function somar (num1: number, num2: number): number {
  return num1 + num2;
}

//Utility Types - Typescript: A idéia deles é permitir criar novos tipos a partir de tipos já existentes

// 1 - Partial

type PersonPartial = Partial<Person>;

const pessoa3: PersonPartial = {

}

//Required
type PersonRequired = Required<Person>;

//Pick

type PersonPicket = Pick<Person, 'nome' | 'idade'>

// Omit

type personOmit = Omit<Person, 'profissao'>;

// Exclude - Excluir um parâmetro

type CriterioExclude = Exclude<Criterio, 'greater'>;

//Record - Objeto dentro de outro

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  '123.234.124-09': {
    altura: 1.6,
    idade: 19,
    nome: "ks",
    },

    "123.123.4322.45": {
      altura: 1.6,
      idade: 82,
      nome: "ka",
    }
}