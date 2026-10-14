import { PessoaFisica } from "./PessoaFisica.js";

export class Cliente extends PessoaFisica{
    private clienteDesde: string;

    constructor(
        cpf: string, 
        nome: string, 
        telefone: string, 
        email: string, 
        dataNascimento: string, 
        clienteDesde: string
    ) {
        super(cpf, nome, telefone, email, dataNascimento);
        this.clienteDesde = clienteDesde;
    }

    public get getClienteDesde(): string { return this.clienteDesde; }
    public set setClienteDesde(novoClienteDesde: string) {
        if (novoClienteDesde.trim().length === 0) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.clienteDesde = novoClienteDesde
    }
}