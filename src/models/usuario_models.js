/* eslint-disable new-cap */
const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd_app');

const UsuarioModel = sequelize.define('Usuario', {
  // Model attributes are defined here
  id_usu: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

}, {
  tableName: 'usuario',
  timestamps: false,
});

module.exports = {
  UsuarioModel,
};