export class Jogo {
    private idJogo: number;
    private nomeJogo: string;
    private genero: string;
    private anoLancamento: number;
    private plataformas: string;
    private descricao: string;
    private media: number;
    private mediasRegistradas = new Map <string, number>();
    private desenvolvedor: string;
    //private mediaJogabilidade: number;
    //private mediaGraficos: number;
    //private mediaHistoria: number;

    constructor(id: number, nome: string, genero: string, anoLancamento: number, 
        plataformas: string, descricao: string, media: number, desenvolvedor: string) {
        this.idJogo = id;
        this.nomeJogo = nome;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
        this.plataformas = plataformas;
        this.descricao = descricao;
        this.media = media;
        this.desenvolvedor = desenvolvedor;
    }

    getJogo(idJogo: number): Jogo {
        if (idJogo == this.idJogo) {
            return this;
        } else {
            throw new Error ("ID incopativel");
        }
    }

    exibirDetalhes(): void {
        console.log(`Jogo: ${this.nomeJogo}, Gênero: ${this.genero}, Ano de Lançamento: ${this.anoLancamento}, Média: ${this.calculaMediaGeral}`);
    }

    setMediaRegistradas(idU:string, mediaU:number): void {
        this.mediasRegistradas.set(idU, mediaU);
    }

    calculaMediaGeral(): number {
        let mediaGeral = 0;
        for (let [key, value] of this.mediasRegistradas) {
            mediaGeral += 1;
          }
        return mediaGeral;
    }
    
    getNomeJogo(): string {
        return this.nomeJogo;
    }
}
