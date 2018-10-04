exports.isUnique = (modelName, field) => {
  return (value, next) => {
    var Model = require("./models/index")[modelName];
    var query = {};
    query[field] = value;
    Model.find({where: query, attributes: ["id"]}).then(function(obj) {
      if (obj) {
        next(field + " đã được sử dụng");
      } else {
        next();
      }
    });
  };
}