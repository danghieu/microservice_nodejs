const GenreService= require('./../../database/repository/genre.service.js');
exports.create= (req,res) => {
  GenreService.save(req.body)
    .then((data)=>{
      return res.status(200).json({
        "status": "OK",
        "data": data.toJSON()
      });
    })
    .catch((err)=>{
      return res.status(400).json({
        'status': "ERR",
        'data': err.toString()
      });
    })
};

exports.getList= (req,res) => {
  GenreService.list(req.query).then((data)=>{
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