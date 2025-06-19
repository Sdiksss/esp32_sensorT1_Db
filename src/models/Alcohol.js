const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const AlcoholT2 = sequelize.define('sensort2', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // desactiva createdAt y updatedAt de Sequelize
});

module.exports = AlcoholT2;
