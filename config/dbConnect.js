const { Sequelize } = require('sequelize');


const dbConnection = async ()=>{

    const sequelize = new Sequelize('userlist', 'root', '12345', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});
 try {
  await sequelize.authenticate();
  console.log('db Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}   
}

module.exports = {dbConnection};