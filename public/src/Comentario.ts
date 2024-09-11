import { Review } from "./Review";

export class Comentario{
    idComentario: number;
    textoComentario: string;
    idReview: string;
    review: Review;

    constructor (idComentario: number, textoComentario: string, idReview: string,
        review: Review){
            this.idComentario = idComentario;
            this.textoComentario = textoComentario;
            this.idReview = idReview;
            this.review = review;
    }

    
}