const {DataTypes, STRING} = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('quotes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quotes: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: 'Anonymous'
  },
  year: {
    type: DataTypes.INTEGER
  }
},
{
  timeStamp: false //? no agrega las columnas created_at y updated_at
})

module.exports = Quotes