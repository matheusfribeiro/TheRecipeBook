const sequelize = require('../utils/database')
const {DataTypes} = require('sequelize')

const Ingredients = sequelize.define('ingredients', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ingredientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Ingredients