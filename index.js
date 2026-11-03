(async () => {
    const database = require('./db');
    const Produto = require('./produto'); // Com P maiúsculo
    const Usuario = require('./usuario'); // Ajustado para Usuario

    try {
        // Sincroniza o banco de dados
        const resultado = await database.sync();
        console.log("Banco sincronizado com sucesso:", resultado);

        // Criação do Produto
        const resultadoCreate = await Produto.create({
            nome: 'Processador Ryzen 5700x',
            preco: 1075,
            descricao: 'Processador 8 core e 12 treedt'
        });
        console.log("Produto cadastrado:", resultadoCreate.toJSON());

        // Criação do Usuário
        const cadastroUser = await Usuario.create({
            nome: 'Caio Lima',
            cpf: '23993111000',          // Dica: CPF e CEP costumam ser salvos como String/TEXT por conta dos zeros à esquerda
            dataNascimento: '23121982',  // Ajustado para texto/string conforme definido no model
            cep: '55133220'
        });
        console.log("Usuário cadastrado:", cadastroUser.toJSON());

    } catch (error) {
        console.log("Ocorreu um erro:", error);
    }
})();
