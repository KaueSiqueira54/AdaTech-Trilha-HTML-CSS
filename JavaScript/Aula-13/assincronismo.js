const fs = require("fs");

// * Callbacks - Função de retorno

// console.log("ANTES de ler o arquivo")

// //Função Assincrona (ler um arquivo leva tempo)
// fs.readFile('AdaTech-Trilha-HTML-CSS/JavaScript/Aula-13/arquivo.txt', (erro, conteudo) => {
//   if (erro) {
//     console.log("ocorreu ume erro ao tentar ler o arquivo: ", erro)
//   } else {
//     console.log(String(conteudo))
//   }
// })

// console.log("DEPOIS de ler o arquivo")

//Exemplo 2 setTimeout (função que cria um timer)

// console.log("Antes")

// setTimeout(() => {
//   console.log("Executado após 2 segundos")
// }, 2* 1000)

// console.log("Depois do setTime")

// Exemplo Promisses -

console.log("Antes da Promise");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "AdaTech-Trilha-HTML-CSS/JavaScript/Aula-13/arquivo.txt",
      (erro, conteudo) => {
        if (erro) {
          reject("ocorreu ume erro ao tentar ler o arquivo: ", erro);
        } else {
          resolve(String(conteudo));
        }
      }
    );
  }); // Criando uma promessa
}

//Foco a partir daqui..
lerArquivoPromise()
  //Antes-Deu certo-Then
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: ", retornoDoResolveDaPromise);
  })
  //Deu erro-Depois
  .catch((erro) => {
    console.log("Deu ruim: ", erro);
  })
  //Executa independente de ter sucesso ou erro
  .finally(() => {
    console.log(
      "Vai ser executado independente do sucesso ou fracasso da promessa ao final dela"
    );
  });

console.clear();

// 3 Async/await

async function leituraDados() {
  console.log("Antes da promise resolvida");

  try {
    const retornoDaPromessa = await lerArquivoPromise(); //Espere a função ser executada para seguir o código

    console.log(retornoDaPromessa);
    console.log("Depois da promise resolvida");
  } catch (erro) {
    console.log("Executado depois da promisse com erro")
  } finally {
    console.log("Dentro do finally")
  }
}

leituraDados();
