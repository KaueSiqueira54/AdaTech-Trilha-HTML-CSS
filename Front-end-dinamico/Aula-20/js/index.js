//Selecionar elementos HTML da página utilizando o document
//Pega todos os elementos pelo nome das tags
const p = document.getElementsByTagName("p");

console.log(p);

//2 - Pelo nome da classe

const paragrafo = document.getElementsByClassName("paragrafo");

console.log(paragrafo);

// 3 - Pelo name da tag

const emailInput = document.getElementsByName("email");

console.log(emailInput);

// 4 - Pelo id da tag

const img = document.getElementById("logo");

console.log(img);

// 5 - Querry Selector

const ima = document.querySelector("body > img");

console.log(ima);

// ALL

const paragrafos = document.querySelectorAll("p");

console.clear();

//Acessando / Alternando o conteúdo das tags

const primeiroParagrafo = document.querySelector("p.paragrafo");

console.log(primeiroParagrafo);

console.log("TextContent: ", primeiroParagrafo.textContent);
//Conteúdo do texto, ignorando as tags

console.log("innerHTML :", primeiroParagrafo.innerHTML);
//Pega TODO o conteúdo da tag, inclusive as tags

primeiroParagrafo.textContent = "Outra Coisa";

primeiroParagrafo.innerHTML = "<strong>Outra Coisa</strong>";

//Values

console.clear();

emailInput[0].value = "kaue8521@gmail.com";

console.log(emailInput);

//Criando elementos na página HTML

const listaLis = document.querySelectorAll("ul > li");

const novaLI = document.createElement("li"); // Criando a tag LI vazia

novaLI.textContent = "Segundo item"; // Adicionando um texto a LI

const listaUl = document.querySelector("ul.lista");

listaUl.appendChild(novaLI);

// Insert Before

listaUl.insertBefore(novaLI, listaLis[1]);

listaUl.removeChild(listaLis[1]);
