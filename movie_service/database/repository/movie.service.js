const MovieRepository= require('./../repository/movie.repository.js');

exports.save= (data) => {
  return MovieRepository.save(data);
};

exports.list = (condition) => {
  return MovieRepository.list(condition);
};
