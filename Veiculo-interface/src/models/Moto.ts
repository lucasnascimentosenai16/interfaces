import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo{
    private cilindrada: number;

    constructor(
        marca: string, 
        modelo: string, 
        ano: number,
        cor: string,
        cilindrada: number
    ) {
        super(marca, modelo, ano, cor);
        this.cilindrada = cilindrada;
    }

    public get getCilindrada(): number { return this.cilindrada; }
    public set setCilindrada(novoCilindrada: number) {
        if (!novoCilindrada) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.cilindrada = novoCilindrada
    }
}