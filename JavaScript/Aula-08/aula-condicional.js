const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual o seu saldo? \n"));

// while (saldo < 0) {
//   console.log("Saldo insuficiente! Tente novamente.")
//   saldo = Number(prompt.question("Qual o seu saldo? \n"));
// }

// console.log(saldo);

// let notaDoAluno = Number(prompt.question("Qual a nota do aluno? \n"));

// let somaDasNotas = 0;

// let cont = 0;

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno;

//   notaDoAluno = Number(prompt.question("Digite a próxima nota \n"));
//   cont ++;
// }

// console.log(somaDasNotas);
// console.log(`A média das notas é: ${somaDasNotas / cont}`);

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroUsuario = Number(prompt.question("Digite um número:"));

while (numeroUsuario !== numeroAleatorio) {
  console.log("Tente Novamente!");
  numeroUsuario = Number(prompt.question("Digite um número:"));
}

console.log(`Parabéns! O número era: ${numeroAleatorio}`);
