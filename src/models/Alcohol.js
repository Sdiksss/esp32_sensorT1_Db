const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const AlcoholT2 = sequelize.define('sensort2', {
  NivelAlcohol: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  boton: {
    type: DataTypes.ENUM('on', 'off'),
    allowNull: true, // puedes poner false si siempre debe tener un valor válido
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = AlcoholT2;
