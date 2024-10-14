import { Review } from "./Review";
import { Usuario } from "./Usuario";

export class Curtida {
    private idUsuario: string;
    private idReview: string;

    constructor(idUsuario: string, idReview: string) {
            this.idReview = idReview;
            this.idUsuario = idUsuario;
    }
}