var createError = require('http-errors');
var express = require('express');
var path = require('path');

const cors = require('cors');
var config =require('./database/mongodb.json');
var mongoose =require('mongoose');

const UserRouting = require('./routes/routing');

var app = express();
app.listen(5000);
app.use(cors());
mongoose.connect(config.mongo.uri,
    {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false},
    (err)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("connected to database")
    }

    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());



app.use("/user",UserRouting);

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
