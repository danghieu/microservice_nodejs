const express = require('express');
const instance = express();
const PortProperties= require('./../extension/PortProperties.json');

instance.use('/', express.static(__dirname + '/public'))


instance.listen(PortProperties.UI_PORT, () => {
  console.log("Server api is running on port "+PortProperties.UI_PORT);
});