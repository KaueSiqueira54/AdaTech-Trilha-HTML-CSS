// Muito útil quando váriavel possui valores especificos

const permissoes = "aluno";

switch (permissoes) {
  case "aluno":
    console.log("Aluno só pode ver as aulas");
    break;
  case "professor":
    console.log("Aulas");
    break;
  case "adm": {
    console.log("ADM faz tudo");
    break;
  }
  default:
    console.log("Não sei quem é você!");
    break;
}
