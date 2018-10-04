const models = require('./../models');
exports.save = (data, options= {}) => {
  return models.movie.create(data, options);
};

exports.list= (condition ={}) =>{
  return models.movie.findAll({
    where: condition,
    raw: true
  });
}
