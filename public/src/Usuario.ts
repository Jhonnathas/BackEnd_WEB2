import { Review } from "./Review";

export class Usuario {
    private id: string;
    private nome: string;
    private carisma: string;
    private email: string;
    private telefone: number;
    private idade: number;
    private historicoReviews: Review;

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

    getID(): string {
        return this.id;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}`);
    }

    /*curti(): void{
        Curtida curtida = new Curtida (this.getID, Review.getI )
    }*/
}
