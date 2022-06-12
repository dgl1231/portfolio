const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayout = require('express-ejs-layouts');

const routes = require('./router');

const app = express();
const port = 8080;

const viewpath = path.join(__dirname, 'views');
// view engine setup
app.set('views', viewpath);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(expressLayout);
app.set('layout', 'layout/layout');
app.set('layout extractScripts', true);

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//port 8080 localhost start
app.listen(port, function () {
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;