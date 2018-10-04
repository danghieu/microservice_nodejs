'use strict';
const util= require('./../util.js');

module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    name: {
      type: DataTypes.STRING,
      validate:{
        isUnique: util.isUnique('movie', 'name')
      }
    },
    url: DataTypes.STRING,
    genre_name: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};