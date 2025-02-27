'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Rol,{
        foreignKey:'idRol',
        as:'roles'
      });
      Usuario.belongsTo(models.Persona,{
        foreignKey:'idPersona',
        as:'personas'
      });
    }
  }
  Usuario.init({
    idPersona: DataTypes.INTEGER,
    idRol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
    tableName:'usuarios'
  });
  return Usuario;
};