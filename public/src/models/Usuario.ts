import { Curtida } from "./Curtida";
import { Review } from "./Review";

export class Usuario {
    private id: string;
    private nome: string;
    private email: string;
    private telefone: number;
    private idade: number;
    private review!: Review;
    private curtida!: Curtida;

    constructor(id: string, nome: string, email: string,
        telefone: number, idade: number) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
    }

    getID(): string {
        return this.id;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}`);
    }

    getNomeU(): string {
        return this.nome;
    }
}
