export class Veiculo {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        marca: string, 
        modelo: string, 
        ano: number,
        cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    public get getMarca(): string { return this.marca; }
    public get getModelo(): string { return this.modelo; }
    public get getAno(): number { return this.ano; }
    public get getCor(): string { return this.cor; }

    public set setMarca(novomMarca: string) {
        if (!novomMarca) {
            console.log("\nERRO: A marca não pode ser vazio!")
            return;
        }
        this.marca = novomMarca
    }
    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\nERRO: O modelo não pode ser vazio!")
            return;
        }
        this.modelo = novoModelo
    }
    public set setAno(novoAno: number) {
        if (!novoAno) {
            console.log("\nERRO: O ano não pode ser vazio!")
            return;
        }
        this.ano = novoAno
    }
}