'use strict';
const util= require('./../util.js');

module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      validate:{
        isUnique: util.isUnique('genre', 'name')
      }
    }
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
  };
  return genre;
};