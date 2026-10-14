import readLine from "readline-sync";
import { Administrador } from "./src/models/Administrador.js";
import { Engenheiro } from "./src/models/Engenheiro.js";
import { Medico } from "./src/models/Medico.js";

let resposta = readLine.questionInt("Qual sua função?\n1 - Administrador\n2 - Engenheiro\n 3 - Medico\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE ADMINISTRADOR ===");
    const novoAdministrador = new Administrador(
        "5510m",
        "Carlos Silva",
        "11999999999",
        "Rua numero 0",
        "23/04",
        30000,
        5510
    );

    console.log(`\nAdministrador cadastrado: ${novoAdministrador.getNome}`);
    console.log(`Cra: ${novoAdministrador.getCra}`);

    // Interação via teclado utilizando herança
    novoAdministrador.setNome = readLine.question("\nDigite o nome atualizado do Administrador: ");
    novoAdministrador.setTelefone = readLine.question("Digite o novo telefone: ");

    // Exibindo TODOS os dados do Administrador no final
    console.log("\n================================================");
    console.log("      DADOS COMPLETOS DO ADMINISTRADOR          ");
    console.log("================================================");
    // Dados herdados da classe PessoaFisica
    console.log(`Matricula:                  ${novoAdministrador.getMatricula}`);
    console.log(`Nome:                       ${novoAdministrador.getNome}`);
    console.log(`Telefone:                   ${novoAdministrador.getTelefone}`);
    console.log(`Endereco:                   ${novoAdministrador.getEndereco}`);
    console.log(`Data de Nascimento:         ${novoAdministrador.getDataNascimento}`);
    // Dados específicos da classe Administrador
    console.log(`Cra:                        ${novoAdministrador.getCra}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE ENGENHEIRO ===");
    const novoEngenheiro = new Engenheiro(
        "5510m",
        "Carlos Silva",
        "11999999999",
        "Rua numero 0",
        "23/04",
        30000,
        5510
    );

    console.log(`\nEngenheiro cadastrado: ${novoEngenheiro.getNome}`);
    console.log(`NumCrea: ${novoEngenheiro.getNumCrea}`);

    // Interação via teclado utilizando herança
    novoEngenheiro.setNome = readLine.question("\nDigite o nome atualizado do Engenheiro: ");
    novoEngenheiro.setTelefone = readLine.question("Digite o novo telefone: ");

    // Exibindo TODOS os dados do Engenheiro no final
    console.log("\n================================================");
    console.log("        DADOS COMPLETOS DO ENGENHEIRO           ");
    console.log("================================================");
    // Dados herdados da classe PessoaFisica
    console.log(`Matricula:                  ${novoEngenheiro.getMatricula}`);
    console.log(`Nome:                       ${novoEngenheiro.getNome}`);
    console.log(`Telefone:                   ${novoEngenheiro.getTelefone}`);
    console.log(`Endereco:                   ${novoEngenheiro.getEndereco}`);
    console.log(`Data de Nascimento:         ${novoEngenheiro.getDataNascimento}`);
    // Dados específicos da classe Engenheiro
    console.log(`NumCrea:                    ${novoEngenheiro.getNumCrea}`);
    console.log("================================================\n");
} if (resposta === 3) {
    console.log("=== CADASTRO DE MEDICO ===");
    const novoMedico = new Medico(
        "5510m",
        "Carlos Silva",
        "11999999999",
        "Rua numero 0",
        "23/04",
        30000,
        5510
    );

    console.log(`\nMedico cadastrado: ${novoMedico.getNome}`);
    console.log(`Crm: ${novoMedico.getCrm}`);

    // Interação via teclado utilizando herança
    novoMedico.setNome = readLine.question("\nDigite o nome atualizado do Medico: ");
    novoMedico.setTelefone = readLine.question("Digite o novo telefone: ");

    // Exibindo TODOS os dados do Medico no final
    console.log("\n================================================");
    console.log("           DADOS COMPLETOS DO MEDICO            ");
    console.log("================================================");
    // Dados herdados da classe PessoaFisica
    console.log(`Matricula:                  ${novoMedico.getMatricula}`);
    console.log(`Nome:                       ${novoMedico.getNome}`);
    console.log(`Telefone:                   ${novoMedico.getTelefone}`);
    console.log(`Endereco:                   ${novoMedico.getEndereco}`);
    console.log(`Data de Nascimento:         ${novoMedico.getDataNascimento}`);
    // Dados específicos da classe Medico
    console.log(`Crm:                        ${novoMedico.getCrm}`);
    console.log("================================================\n");
} else {
    console.log("Função inválida, tente novamente!")
}