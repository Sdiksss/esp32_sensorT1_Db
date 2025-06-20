const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const AlcoholT2 = sequelize.define('sensort2', {
  NivelAlcohol: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false, // desactiva createdAt y updatedAt de Sequelize
});

module.exports = AlcoholT2;
