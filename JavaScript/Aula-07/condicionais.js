const prompt = require('readline-sync')

const idade = Number(prompt.question("Qual a sua idade? \n"))

if (idade >=18) {
  console.log("Você é maior de idade!")
}
else {
  console.log("Você é menor de idade!")
}

const mediaAluno = 7

if (mediaAluno >= 7) {
  console.log("Aprovado!")
} else if (mediaAluno >= 5) {
  console.log("Prova Final")
} else {
  console.log("Reprovado!")
}

const idadePessoa = 18
const temCNH = true

if (idade >=18 && temCNH) {
  console.log("Tá liberado, meu patrão!")
} else (
  console.log("Encosta ali meu patrão, cadê a CNH?")
)