export class Funcionario {
    private matricula: string;
    private nome: string;
    private telefone: string;
    private endereco: string;
    private dataNascimento: string;
    private salario: number;

    constructor(
        matricula: string, 
        nome: string, 
        telefone: string, 
        endereco: string, 
        dataNascimento: string,
        salario: number
    ) {
        this.matricula = matricula;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.salario = salario;
    }

    public get getMatricula(): string { return this.matricula; }
    public get getNome(): string { return this.nome; }
    public get getTelefone(): string { return this.telefone; }
    public get getEndereco(): string { return this.endereco; }
    public get getDataNascimento(): string { return this.dataNascimento; }
    public get getDataSalario(): number { return this.salario; }

    public set setMatricula(novoMatricula: string) {
        if (novoMatricula.trim().length === 0) {
            console.log("\nERRO: O matricula não pode ser vazio!")
            return;
        }
        this.matricula = novoMatricula
    }
    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\nERRO: O Nome não pode ser vazio!")
            return;
        }
        this.nome = novoNome
    }
    public set setTelefone(novoTelefone: string) {
        if (novoTelefone.trim().length === 0) {
            console.log("\nERRO: O Telefone não pode ser vazio!")
            return;
        }
        this.telefone = novoTelefone
    }
    public set setEndereco(novoEndereco: string) {
        if (novoEndereco.trim().length === 0) {
            console.log("\nERRO: O Endereco não pode ser vazio!")
            return;
        }
        this.endereco = novoEndereco
    }
    public set setDataNascimento(novoDataNascimento: string) {
        if (novoDataNascimento.trim().length === 0) {
            console.log("\nERRO: O DataNascimento não pode ser vazio!")
            return;
        }
        this.dataNascimento = novoDataNascimento
    }
    public set setSalario(novoSalario: number) {
        if (!novoSalario) {
            console.log("\nERRO: O salario não pode ser vazio!")
            return;
        }
        this.salario = novoSalario
    }
}