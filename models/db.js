const Sequelize = require('sequelize');

//conexion con la BD sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Lizarraga_1', {
    host: 'al17517.tech',
    dialect:  'mysql'
});

sequelize 
     .authenticate()
     .then(() => {
         console.log('Connection has been established  successfully.');
    })
     .catch(err => {
         console.error('Unable to connect to the database:', err);
    });

module.exports= sequelize;
