import { Review } from "./Review";
import { Usuario } from "./Usuario";

export class Curtida {
    //idCurtida: number;
    private idUsuario: string;
    private idReview: string;
    private review: Review;
    private usuario: Usuario;

    constructor(idUsuario: string, idReview: string,
        review: Review, usuario: Usuario) {
            //this.idCurtida = idCurtida;
            this.idReview = idReview;
            this.idUsuario = idUsuario;
            this.review = review;
            this.usuario = usuario;
    }
}