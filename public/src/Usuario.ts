export class Usuario {
    nome: string;
    email: string;
    idade: number;

    constructor(nome: string, email: string, idade: number) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}`);
    }
}
