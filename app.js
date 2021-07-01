var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ("cors")
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/weather-backend",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(()=>{
    console.log(`MONGO DB CONNECTED`)
  })
  .catch(function (e){
    console.log(e)
  })

var indexRouter = require('./routes/indexRouter');
var locationRouter = require('./routes/Location/locationRouter');

var app = express();

// view engine setup
app.use (cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/location', locationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
