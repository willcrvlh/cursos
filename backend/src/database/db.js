import {Sequelize} from 'sequelize';

const connection = new Sequelize("cursos", "root", "Wi11i@nCarv@lh0",{
    host: 'localhost',
    dialect: 'mysql'
  });

  connection.authenticate()
  try {
    console.log("conexão realizada com sucesso")
  } catch (error) {
    console.log(`${error}: erro ao conectar com o banco de dados`)
  }

  export default connection