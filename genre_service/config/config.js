const compression = require('compression');
const bodyParser = require('body-parser');
module.exports = (instance) => {
  /**
   * enable cors
   */
  instance.use(function(request, response, next) {
    var originReq= request.get('origin');
    response.header("Access-Control-Allow-Origin", originReq);
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, _token");
    next();
  });
  /**
   * compression middleware
   */
  instance.use(compression({
    threshold: 512
  }));

  /**
   * bodyParser for app
   */
  instance.use(bodyParser.json({
    limit: '20mb'
  }));
  instance.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
  }));

};