var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(function(req, res, next) {
//   console.log(req.url, '저도 미들웨어입니다');
//   next();
// });

// 하나의 use에 여러개의 미들웨어 장착
// app.use('/', function(req, res, next) {
//   console.log('첫 번째 미들웨어');
//   next();
// }, function(req, res, next) {
//   console.log('두 번째 미들웨어');
//   next();
// }, function(req, res, next) {
//   console.log('세 번째 미들웨어');
//   next();
// });

// 나중에 로그인 구현시 사용
// app.use(function(req, res, next) {
//   if (+new Date() % 2 === 0) {
//     return res.status(404).send('50% 실패');
//   } else {
//     next();
//   }
// }, function(req, res, next) {
//   console.log('50% 성공');
//   next();
// });

//------------------------
// app.use(logger('dev')); // 이중 하나 선택해서 콘솔 로그를 남기자
app.use(logger('short'));
// app.use(logger('common'));
// app.use(logger('combined'));

app.use(express.static(path.join(__dirname, 'public'))); // static 파일 요청은 morgan 다음에 해야함
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));

// 아래는 위를 축약시킨 것

// app.use(logger('dev'), express.json(), express.urlencoded({ extended: false }),
// cookieParser(), express.static(path.join(__dirname, 'public')));
//---------------------------

app.use(session( {
  resave: false,
  saveUninitialized: false,
  secret: 'secret code',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', function(req, res, next) {
  console.log('GET 메서드 / 주소의 요청일 때만 실행됩니다');
  next();
}); // use, get, post, put, patch 등 HTTP 메서드 사용가능
app.post('/data', function(req, res, next) {
  console.log('POST 메서드 /data 주소 요청시 실행됨');
  next();
});

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
