const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    cep: {
        type: Sequelaze.TEXT,
        allowNull: false
    }
    logradouro: {
        type
    }
})

GPUShaderModule.exports = Produuto;