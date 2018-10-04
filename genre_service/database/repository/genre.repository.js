const models = require('./../models');
exports.save = (data, options= {}) => {
  return models.genre.create(data, options);
};
exports.list= (condition ={}) =>{
  return models.genre.findAll({
    where: condition,
    raw: true
  });
}
