import { Review } from "./Review";
import { Usuario } from "./Usuario";

export class Curtida {
    private idUsuario: string;
    private idReview: string;
    //private review: Review;
    //private usuario: Usuario;

    constructor(idUsuario: string, idReview: string) {
            this.idReview = idReview;
            this.idUsuario = idUsuario;
    }
}