export class Jogo {
    private idJogo: number;
    private nomeJogo: string;
    private categoria: string;
    private anoLancamento: number;
    private plataformas: string;
    private descricao: string;
    private media : number;
    private mediaJogabilidade: number;
    private mediaGraficos: number;
    private mediaHistoria: number;

    constructor(id: number, nome: string, genero: string, anoLancamento: number, 
        plataformas: string, descricao: string, media: number, mediaJogabilidade: number,
        mediaGraficos: number, mediaHistoria: number
    ) {
        this.idJogo = id;
        this.nomeJogo = nome;
        this.categoria = genero;
        this.anoLancamento = anoLancamento;
        this.plataformas = plataformas;
        this.descricao = descricao;
        this.media = media;
        this.mediaJogabilidade = mediaJogabilidade;
        this.mediaGraficos = mediaGraficos;
        this.mediaHistoria = mediaHistoria;
    }

    getID(): number {
        return this.idJogo;
    }

    exibirDetalhes(): void {
        console.log(`Jogo: ${this.nomeJogo}, Gênero: ${this.categoria}, Ano de Lançamento: ${this.anoLancamento}`);
    }

    calculaMedia(): void {
        this.media = this.mediaJogabilidade * 0.40 + this.mediaGraficos * 0.30 + this.mediaHistoria * 0.30;
    }
    
}
