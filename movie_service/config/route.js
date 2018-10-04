var MovieController= require('../http/controllers/movie.controller');
module.exports = (instance) => {
  instance.post('/movie', MovieController.create);
  instance.get('/movie', MovieController.getList);

};