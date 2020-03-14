var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  bodyParser = require('body-parser'),
  cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes.js');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server started at port: ' + port);
