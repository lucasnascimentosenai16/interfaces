import { Funcionario } from "./Funcionario.js";

export class Administrador extends Funcionario{
    private cra: number;

    constructor(
        matricula: string, 
        nome: string, 
        telefone: string, 
        endereco: string, 
        dataNascimento: string,
        salario: number,
        cra: number
    ) {
        super(matricula, nome, telefone, endereco, dataNascimento, salario);
        this.cra = cra;
    }

    public get getCra(): number { return this.cra; }
    public set setCra(novoCra: number) {
        if (!novoCra) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.cra = novoCra
    }
}