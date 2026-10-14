import readLine from "readline-sync";
import { Moto } from "./src/models/Moto.js";
import { Automovel } from "./src/models/Automovel.js";

let resposta = readLine.questionInt("Qual veiculo deseja cadastrar?\n1 - Moto\n2 - Automovel\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE MOTO ===");
    const novoMoto = new Moto(
        "Honda",
        "Fan",
        2026,
        "Preta",
        250,
    );

    console.log(`\nMoto cadastrada: ${novoMoto.getModelo}`);
    console.log(`Cilindrada: ${novoMoto.getCilindrada}`);


    novoMoto.setModelo = readLine.question("\nDigite o modelo atualizado do Moto: ");
    novoMoto.setAno = readLine.questionInt("Digite o novo ano: ");


    console.log("\n================================================");
    console.log("            DADOS COMPLETOS DA MOTO             ");
    console.log("================================================");


    console.log(`Marca:                  ${novoMoto.getMarca}`);
    console.log(`Modelo:                 ${novoMoto.getModelo}`);
    console.log(`Ano:                    ${novoMoto.getAno}`);
    console.log(`Cor:                    ${novoMoto.getCor}`);
    console.log(`Cilindrada:             ${novoMoto.getCilindrada}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE AUTOMOVEL ===");
    const novoAutomovel = new Automovel(
        "Ferrari",
        "Purosangue",
        2026,
        "Vermelha",
        4,
        "V12"
    );

    console.log(`\nAutomovel cadastrada: ${novoAutomovel.getModelo}`);
    console.log(`Motor: ${novoAutomovel.getMotor}`);


    novoAutomovel.setModelo = readLine.question("\nDigite o modelo atualizado do Automovel: ");
    novoAutomovel.setAno = readLine.questionInt("Digite o novo ano: ");


    console.log("\n================================================");
    console.log("         DADOS COMPLETOS DA AUTOMOVEL           ");
    console.log("================================================");


    console.log(`Marca:                  ${novoAutomovel.getMarca}`);
    console.log(`Modelo:                 ${novoAutomovel.getModelo}`);
    console.log(`Ano:                    ${novoAutomovel.getAno}`);
    console.log(`Cor:                    ${novoAutomovel.getCor}`);
    console.log(`Numero de portas:       ${novoAutomovel.getNumeroPortas}`);
    console.log(`Motor:                  ${novoAutomovel.getMotor}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}