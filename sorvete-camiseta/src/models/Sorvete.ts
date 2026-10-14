import { Produto } from "./Produto.js";

export class Sorvete extends Produto{
    private tempAdequada: number;

    constructor(
        id: number, 
        nome: string, 
        preco: number,
        tempAdequada: number
    ) {
        super(id, nome, preco);
        this.tempAdequada = tempAdequada;
    }

    public get getTempAdequada(): number { return this.tempAdequada; }
    public set setTempAdequada(novoTempAdequada: number) {
        if (!novoTempAdequada) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.tempAdequada = novoTempAdequada
    }
}