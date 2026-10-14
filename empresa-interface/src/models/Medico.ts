import { Funcionario } from "./Funcionario.js";

export class Medico extends Funcionario{
    private crm: number;

    constructor(
        matricula: string, 
        nome: string, 
        telefone: string, 
        endereco: string, 
        dataNascimento: string,
        salario: number,
        crm: number
    ) {
        super(matricula, nome, telefone, endereco, dataNascimento, salario);
        this.crm = crm;
    }

    public get getCrm(): number { return this.crm; }
    public set setCrm(novoCrm: number) {
        if (!novoCrm) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.crm = novoCrm
    }
}