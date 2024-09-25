export class Jogo {
    private idJogo: number;
    private nomeJogo: string;
    private categoria: string;
    private anoLancamento: number;
    private plataformas: string;
    private descricao: string;
    private media: number;
    private mediasRegistradas = new Map <string, number>(); 
    //private mediaJogabilidade: number;
    //private mediaGraficos: number;
    //private mediaHistoria: number;

    constructor(id: number, nome: string, genero: string, anoLancamento: number, 
        plataformas: string, descricao: string, media: number) {
        this.idJogo = id;
        this.nomeJogo = nome;
        this.categoria = genero;
        this.anoLancamento = anoLancamento;
        this.plataformas = plataformas;
        this.descricao = descricao;
        this.media = media;
    }

    getID(): number {
        return this.idJogo;
    }

    exibirDetalhes(): void {
        console.log(`Jogo: ${this.nomeJogo}, Gênero: ${this.categoria}, Ano de Lançamento: ${this.anoLancamento}`);
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
