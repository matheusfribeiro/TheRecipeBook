const sequelize = require('../utils/database')
const {DataTypes} = require('sequelize')


const Recipe = sequelize.define('recipe', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dishName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.TEXT,
  },
  cookingTime: {
    type: DataTypes.INTEGER
  },
})

module.exports = Recipe
