import { Sequelize } from "sequelize";
import db from '../database/db.js';

const poloModel = db.define('Polo',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
        foreignKey: true
    },
    localizacao:{
        type: Sequelize.STRING,
        allowNull:false,
    }
})

//poloModel.sync()

export default poloModel;