//High Order Function

// 1- Função que retorna outra função

function welcome(couseName) {
  return (studentName) => {
    console.log(`Olá ${studentName}, Bem vindo(a) ao curso de ${couseName}!`);
  };
}

const displayWelcomeToFrontEndCouse = welcome("Front-End em React");

displayWelcomeToFrontEndCouse("Kauê Siqueira");

console.clear();

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const divisao = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

console.log(calcular(10, 5, multiplicar));

console.clear();

const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
