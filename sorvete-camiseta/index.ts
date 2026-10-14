import readLine from "readline-sync";
import { Sorvete } from "./src/models/Sorvete.js";
import { Camiseta } from "./src/models/Camiseta.js";

let resposta = readLine.questionInt("O que deseja cadastrar/\n1 - Sorvete\n2 - Camiseta\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE SORVETE ===");
    const novoSorvete = new Sorvete(
        24,
        "Sorvete de Chocolate",
        100,
        15
    );

    console.log(`\nSorvete cadastrada: ${novoSorvete.getNome}`);
    console.log(`Temperatura Adequada: ${novoSorvete.getTempAdequada}`);


    novoSorvete.setNome = readLine.question("\nDigite o nome atualizado do Sorvete: ");
    novoSorvete.setPreco = readLine.questionInt("Digite o novo preco: ");


    console.log("\n================================================");
    console.log("           DADOS COMPLETOS DO SORVETE           ");
    console.log("================================================");
    console.log(`id:                  ${novoSorvete.getId}`);
    console.log(`Nome:                 ${novoSorvete.getNome}`);
    console.log(`Preco:             ${novoSorvete.getPreco}`);
    console.log(`Temperatura Adequada:             ${novoSorvete.getTempAdequada}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE CAMISETA ===");
    const novoCamiseta = new Camiseta(
        24,
        "Camiseta Preta",
        100,
        "Preta",
        "Algodão",
        "P"
    );

    console.log(`\nCamiseta cadastrada: ${novoCamiseta.getNome}`);
    console.log(`Cor: ${novoCamiseta.getCor}`);


    novoCamiseta.setNome = readLine.question("\nDigite o nome atualizado do Camiseta: ");
    novoCamiseta.setPreco = readLine.questionInt("Digite o novo preco: ");


    console.log("\n================================================");
    console.log("          DADOS COMPLETOS DO CAMISETA           ");
    console.log("================================================");

    console.log(`id:                  ${novoCamiseta.getId}`);
    console.log(`Nome:                 ${novoCamiseta.getNome}`);
    console.log(`Preco:             ${novoCamiseta.getPreco}`);

    console.log(`Cor:             ${novoCamiseta.getCor}`);
    console.log(`Tecido: ${novoCamiseta.getTecido}`);
    console.log(`Tamanho:                  ${novoCamiseta.getTamanho}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}