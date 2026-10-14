import { PessoaFisica } from "./PessoaFisica.js";

export class Funcionario extends PessoaFisica{
    private registro: string;
    private carteiraTrabalho: string;
    private pis: string;

    constructor(
        cpf: string, 
        nome: string, 
        telefone: string, 
        email: string, 
        dataNascimento: string, 
        registro: string,
        carteiraTrabalho: string,
        pis: string
    ) {
        super(cpf, nome, telefone, email, dataNascimento);
        this.registro = registro;
        this.carteiraTrabalho = carteiraTrabalho;
        this.pis = pis;
    }

    public get getRegistro(): string { return this.registro; }
    public get getCarteiraTrabalho(): string { return this.carteiraTrabalho; }
    public get getPis(): string { return this.pis; }
    public set setRegistro(novoRegistro: string) {
        if (novoRegistro.trim().length === 0) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.registro = novoRegistro
    }
    public set setCarteiraTrabalho(novoCarteiraTrabalho: string) {
        if (novoCarteiraTrabalho.trim().length === 0) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.registro = novoCarteiraTrabalho
    }
    public set setPis(novoPis: string) {
        if (novoPis.trim().length === 0) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.registro = novoPis
    }
}