import { Curtida } from "./Curtida";
import { Review } from "./Review";

export class Usuario {
    private id: string;
    private nome: string;
    //private carisma!: number;
    private email: string;
    private telefone: number;
    private idade: number;
    private historicoReviews: Review;
    private review!: Review;
    private curtida!: Curtida;

    constructor(id: string, nome: string, email: string,
        telefone: number, idade: number, historicoReviews: Review) {
        this.id = id;
        this.nome = nome;
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

    /*curti(): void {
        const idReview = this.review.getID();
        this.curtida = new Curtida (this.getID(), idReview);
    }*/

    /*setCarisma(carisma:string): void {
        this.carisma = carisma;
    }*/
}
