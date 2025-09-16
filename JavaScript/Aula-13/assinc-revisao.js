//No JS a programação assincrona pode ser aplicada de três formas:

//Callbacks
//Função de retorno ou chamada de retorno;
//JS registra a tarefa e executa outras coisas, depois volta e executa essa tarefa que ficou, para melhor otimizar

//Promisses - promessas
//Objeto que promete entregar algo - pode cumprir ou não

//Resolvendo promisses usando async/await

//função para ler arquivos no JS

const fs = require("fs");
const { setTimeout } = require("timers/promises");

console.log("Antes de ler o arquivo");

// 1 - Callbacks

//Função assincrona, pois ler arquivos leva tempo
// fs.readFile(
//   "AdaTech-Trilha-HTML-CSS/JavaScript/Aula-13/arquivo.txt",
//   (erro, conteudo) => {
//     if (erro) {
//       console.log("Ocorreu um erro ao ler o arquivo:", erro);
//     } else {
//       console.log(String(conteudo));
//     }
//   }
// );

console.log("Depois de ler o arquivo");
console.clear();

//Retomar em 30 min - Aula JS avançado - prog assincrona

// 2 - Promisses - promessas
//Objeto que promete realizar algo
//Ultil para casos que usamos operações assincronas (ler um arquivo)
//Estará em um desses estados:
//Pending, fullfield ou reject

console.log("Antes");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "AdaTech-Trilha-HTML-CSS/JavaScript/Aula-13/arquivo.txt",
      (erro, conteudo) => {
        if (erro) {
          reject("Ocorreu um erro ao ler o arquivo.", erro);
        } else {
          resolve(String(conteudo));
        }
      }
    );
  });
}

//Foco a partir daqui

//then - recebe collback e retorna se a promessa der certo - retorna o resolve da promessa

// lerArquivoPromise()
//   .then((retornaResvolvePromessa) => {
//     console.log("Deu certo", retornaResvolvePromessa);
//   }) //cath captura o erro que ocorreu ao fazer a promessa
//   .catch((erro) => {
//     console.log("Deu ruim", erro);
//   }) //Finally é executado independente do sucesso ou fracasso, ao fim dela - sempre é executado
//   .finally(() => {
//     console.log("Independente do sucesso ou fracasso");
//   });

// 3 - async/await

//await - aguarde

async function leituraDados() {
  console.log("Antes da promisse");

  try {
    const dadosDoArquivo = await lerArquivoPromise(); //espera a promessa ser resolvida para avançar no código
    console.log(dadosDoArquivo);

    console.log("Executado depois");
  } catch (erro) {
    console.log(erro);
    console.log("Executado caso der erro catch");
  } finally {
    console.log("Dentro do finally");
  }
}

leituraDados();
