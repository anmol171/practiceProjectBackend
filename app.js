const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


const http = require('http').Server(app);


const server = http.listen(8008, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
server.timeout=1600000;
