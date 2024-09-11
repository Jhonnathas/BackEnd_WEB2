import { Review } from "./Review";
import { Usuario } from "./Usuario";

export class Curtida {
    idCurtida: number;
    idUsuario: string;
    idReview: string;
    review: Review;
    usuario: Usuario;

    constructor(idCurtida: number, idUsuario: string, idReview: string,
        review: Review, usuario: Usuario) {
            this.idCurtida = idCurtida;
            this.idReview = idReview;
            this.idUsuario = idUsuario;
            this.review = review;
            this.usuario = usuario;
    }
}