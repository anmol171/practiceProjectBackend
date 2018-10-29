const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
//var RedisStore = require('connect-redis')(session);
// const morgan = require('morgan');
// const multer = require('multer');
// const request = require('request');
// const colors = require('colors');
// const cors_sec = require('./routes/corsheaders');

// var winston = require('./config/winston');

// const mongoose = require('mongoose');
// const passport = require('passport');


// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/backend');



const http = require('http').Server(app);


// Middlewares for HTTP Request and cors handlers
// app.use(passport.initialize());

// app.use('/', cors_sec.CrossOriginHeaders);
// app.set('trust proxy', 1) // trust first proxy
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ 
//  	limit: '10mb'
//     })); 



// app.use(cookieParser('1a2b3c4d5e6f'));
// app.use(cookieParser());
// app.use(session({
//     //store: new RedisStore(),
//     key: 'user_sid',
//     secret: 'somerandonstuffs',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: 9000000
//     }
// }));
  

// app.use(express.static(__dirname + '/Images'));
// app.set('views', __dirname + '/public/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use(morgan('combined', { stream: winston.stream })); 
// app.use(router);

// require('./config/passport');

// app.use(function(err, req, res, next) {

//   winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//   res.status(err.status || 500);
//   res.send(err.usermessage);
//   /*res.render('error', {
//       message: err.message,
//       error: err
//   });*/
// });

// require('./routes')(router);




// process.on('uncaughtException', function(err,req,res) {
//   console.log('Caught unhandled exception: ' + err);
//   //process.exit(1);
//   });

const server = http.listen(8008, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
server.timeout=1600000;
