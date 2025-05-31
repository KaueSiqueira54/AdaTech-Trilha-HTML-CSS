"use strict";
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
const numeros = [1, 2, 3, 4, 5];
//Array unionTypes - Array de números e string - EVITAR NÂo indicado
// const misto: (number | string)[] = ["Kaue", 18, 1.6];
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(16);
const menorIdade = idades.filter((idades) => idades <= 18);
console.log(menorIdade);
//Tuplas - Conjunto de valores que está dentro de um array
const pessoaTupla = ["Kaue", 18];
//Objeto
const pessoa = {
    nome: "Kaue",
    idade: 18,
    altura: 1.7,
    profissao: "dev",
};
const pessoa2 = {
    nome: "Lucas",
    altura: 1.54,
    idade: 19,
};
console.log(pessoa, pessoa2);
//Union Types
function choseNumber(numero1, numero2, Criterio) {
    const numeroAleatório = Math.random();
    switch (Criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            if (numeroAleatório >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroAl = choseNumber(10, 20, "greater");
console.log(numeroAl);
function somar(num1, num2) {
    return num1 + num2;
}
const pessoa3 = {};
const pessoas = {
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
};
