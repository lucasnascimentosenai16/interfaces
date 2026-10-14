import { Funcionario } from "./Funcionario.js";

export class Engenheiro extends Funcionario{
    private numCrea: number;

    constructor(
        matricula: string, 
        nome: string, 
        telefone: string, 
        endereco: string, 
        dataNascimento: string,
        salario: number,
        numCrea: number
    ) {
        super(matricula, nome, telefone, endereco, dataNascimento, salario);
        this.numCrea = numCrea;
    }

    public get getNumCrea(): number { return this.numCrea; }
    public set setNumCrea(novoNumCrea: number) {
        if (!novoNumCrea) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.numCrea = novoNumCrea
    }
}