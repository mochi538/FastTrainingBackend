'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    static associate(models) {
      Rol.hasMany(models.usuario,{
        foreignKey:'idRol',
        as:'usuarios'
      })
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'persona',
    tableName: 'personas'
  });
  return Persona;
};