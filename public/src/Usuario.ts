import { Review } from "./Review";

export class Usuario {
    id: string;
    nome: string;
    carisma: string;
    email: string;
    telefone: number;
    idade: number;
    historicoReviews: Review;

    constructor(id: string, nome: string, carisma: string, email: string,
        telefone: number, idade: number, historicoReviews: Review) {
        this.id = id;
        this.nome = nome;
        this.carisma = carisma;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
        this.historicoReviews = historicoReviews;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}`);
    }
}
