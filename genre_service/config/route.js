var GenreController= require('../http/controllers/genre.controller');
module.exports = (instance) => {
  instance.post('/genre', GenreController.create);
  instance.get('/genre', GenreController.getList);
};