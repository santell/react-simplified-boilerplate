var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var express = require('express');

var app = express();
var compiler = webpack(config);

var apiUrl = 'http://localhost:8080/api';

app.use('/api', function (req, res) {
 req.pipe(request(apiUrl + req.url)).pipe(res);
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
