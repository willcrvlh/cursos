import {Sequelize} from 'sequelize'
import db from '../database/db.js';

const alunoModel = db.define('Aluno',{
    matricula:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_polo:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// alunoModel.sync();

export default alunoModel;