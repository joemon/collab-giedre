const Query = require("../models/queryModel");
const express = require("express");
const fs = require("fs");
const historyApiFallback = require("connect-history-api-fallback");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require("../config/config");
const webpackConfig = require("../webpack.config");

const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;

// Configuration
// ================================================================================================
// Set up Mongoose
mongoose.connect(config.db_dev);
// mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.connect(config.db);
mongoose.connection
  .once("open", () => {
    console.log(">>> 🖥️  MongoDB: Connection successful");
  })
  .on("error", err => {
    console.log(">>> 🖥️  MongoDB: Error connecting to server\n", err);
  });
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require("./routes")(app);

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('../config/passport')(passport);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, "../client/public"),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, "../dist")));
} else {
  app.use(express.static(path.resolve(__dirname, "../dist")));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
    res.end();
  });
}

app.listen(port, "0.0.0.0", err => {
  if (err) {
    console.log(err);
  }

  console.info(">>> 🌎 Open http://localhost:%s/ in your browser.", port);
});

app.post('./server/routes/api/queries', (req, res) => {
  const doc = new Query({ query: req.body.query })
  doc.save();
});


app.post('./server/routes/api/queries', (req, res) => {
  var query = new Query (req.body);
  query.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = app;
