const GenreRepository= require('./../repository/genre.repository.js');

exports.save= (data) => {
  return GenreRepository.save(data);
};
exports.list = (condition) => {
  return GenreRepository.list(condition);
};
