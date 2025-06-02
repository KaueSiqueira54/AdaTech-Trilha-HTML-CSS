"use strict";
// Aula 19 - POO
//Objeto único
const pessoa = {
    nome: "Kaue",
    idade: 90,
};
//Classe
class Pessoa {
    //Método construtor (obrigatório)
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    //Métodos: ação (funções)
    dormir() {
        console.log("dormindo..💤");
    }
    //Accessor: getter - Método para acessar o cpf mesmo sendo privado
    get cpf() {
        return this._cpf;
    }
    //Accessor: setter - Alterar o cpf mesmo sendo private/ alterar um determinado cpf
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            //Lançando um erro
            throw new Error("CPF lenght is incorrect.");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, _cpf, codigo) {
        super(nome, idade, altura, _cpf); //Chamando atributos da classe mãe - Pessoa
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Dando aula..");
    }
}
//Criando/instanciando uma pessoa (indivíduo) a partir da definição da classe pessoa
const pessoa1 = new Pessoa("Kauê", 20, 1.7, "54235404525");
const pessoa2 = new Pessoa("Wallyson", 25, 1.8, "543546565");
pessoa1.nome = "siqueira";
pessoa1.cpf = "20365948592546";
console.log(pessoa1.cpf);
console.log(pessoa1.dormir());
console.log(pessoa2);
console.log(pessoa2.dormir());
//Objeto da classe professor
const prof = new Professor("Kaue", 20, 1.68, "54645632145632", "456");
console.log(prof);
console.log(prof.ensinar());
