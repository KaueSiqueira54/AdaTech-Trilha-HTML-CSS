function saudacao(nomeDoEstudante, curso = "Front-End em React") {
  return `Olá ${nomeDoEstudante} seja bem vindo(a) ao curso de ${curso}!`;
}

const mensagemSaudacao = saudacao("Kaue"); //Chamada da função

console.log(mensagemSaudacao);

console.clear();

//Funções Anônimas

const calcularDobro = function (numero) {
  return numero * 2;
};

console.log(calcularDobro(5));

console.clear();

//Arrow Functions

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;
