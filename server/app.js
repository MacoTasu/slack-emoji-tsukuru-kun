var webpack = require('webpack');
var express = require('express');
var path = require('path');

var app = express();
var env = app.get('env');
var port = 7000;
app.set('port', port);

// production
if (env === "production") {
  app.use(express.static('dist'));

  app.listen(port, () => {
    console.log("app listening at http://localhost:%d mode:%s", port, env)
  });
}

// development
if (env === "development") {
  let index = require('./routes/index');
  app.use('/', index);

  app.set('views', path.join(__dirname, '..', 'src', 'views'));
  app.set('view engine', 'pug')

  app.use(express.static(path.join(__dirname, '..', 'dist')));

  let config = require('../webpack.config');
  let compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  
  app.listen(port, () => {
    console.log("app listening at http://localhost:%d mode:%s", port, env)
  });
}
