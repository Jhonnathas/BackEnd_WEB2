export class Jogo {
    nome: string;
    genero: string;
    anoLancamento: number;

    constructor(nome: string, genero: string, anoLancamento: number) {
        this.nome = nome;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
    }

    exibirDetalhes(): void {
        console.log(`Jogo: ${this.nome}, Gênero: ${this.genero}, Ano de Lançamento: ${this.anoLancamento}`);
    }
}
