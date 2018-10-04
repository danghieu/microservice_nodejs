const MovieService= require('./../../database/repository/movie.service.js');
var rp = require('request-promise');

exports.create= (req,res) => {
  var id_genre= req.body.genre;
  var data_save={
    name: req.body.name,
    genre_name: '',
    url: req.body.url
  };
  rp('http://localhost:2002/genre?id='+id_genre)
    .then(function (res_api_genre) {
      var res_api_gen_parsed= JSON.parse(res_api_genre);
      if(res_api_gen_parsed.data.length == 0){
        throw "err";
      }
      data_save.genre_name= res_api_gen_parsed.data[0].name;
      return MovieService.save(data_save);
    })
    .then((data)=>{
      return res.status(200).json({
        "status": "OK",
        "data": data.toJSON()
      });
    })
    .catch(function (err) {
      console.log(err)
      return res.status(400).json({
              'status': "ERR",
              'data': err.toString()
      });
    });
};

exports.getList= (req,res) => {
  MovieService.list(req.query).then((data)=>{
    return res.status(200).json({
      "status": "OK",
      "data": data
    });
  })
    .catch((err)=>{
      return res.status(400).json({
        'status': "ERR",
        'data': err.toString()
      });
    })
};