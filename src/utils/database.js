const  Sequelize  = require("sequelize");

const sequelize = new Sequelize("therecipebook", "root", "672645", {
  host: "localhost",
  dialect: "mysql",
});



module.exports =  sequelize ;
