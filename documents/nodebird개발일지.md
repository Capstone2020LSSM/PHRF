# nodebird개발일지

시간 순으로 작성

## package.json 작성 (npm init 해도됨)

```bash
npm i -g sequelize-cli
npm i sequelize pg pg-hstore
sequelize init
```

추가로 폴더및 파일들을 생성시켜 이 상태로 만듬

![image](https://user-images.githubusercontent.com/40845064/90759432-5e10c180-e31b-11ea-97d9-3d5368f69d96.png)

```bash
npm i express cookie-parser express-session morgan connect-flash pug
npm i -g nodemon
npm i -D nodemon
```

\+ app.js 작성

## 중요한 정보(비밀키 등)을 dotenv를 사용하여 숨김

```bash
npm i dotenv
touch .env // .env 파일 생성(다른 방식으로 만들어도 됨)
```

.env 파일에 해당 내용 작성

```.env
COOKIE_SECRET=nodebirdsecret
```


   app.js 수정

   ```js
   +	require('dotenv').config();
   ...
   -	app.use(cookieParser('nodebirdsecret'));
   +	app.use(cookieParser(process.env.COOKIE_SECRET));
   ...
   -		secret: 'nodebirdsecret'
   +		secret: process.env.COOKIE_SECRET
   ```

## 퍼그 파일들 생성

routes/page.js

views/layout.pug

views/main.pug

views/profile.pug

~~아무튼 생성됨~~

- dotenv를 사용해서 중요한 내용을 숨기자

config.json은 정적파일이라 dotenv를 못써먹으니

config.js파일을 만들어서 저장하자

참고로 postgreql url을 쓸라면

DATABASE_URL=postgres://아이디:비밀번호@링크URL:포트번호/디비명

이 형식을 지켜줘야한다

진짜

## sequelize짱짱

DB연결 잘하고

sequelize형식대로 관계 형성하고 각각 테이블마다 js파일만들면

sequelize가 데이터베이스 상관없이 알아서 다 만들어준다

물론 오타 없이 잘 적어야겠지만

## Passport 모듈로 로그인 구현하기

```bash
npm i passport passport-local passport-kakao bcrypt
```

- app.js수정

```js
const passport = require('passport');    // == require('./passport/index.js')
...  // index.js 생략 가능
const passportConfig = require('./passport');
...
passportConfig(passport);
...
app.use(passport.initialize());
app.use(passport.session());
```

passport.initialize() 미들웨어는 요청(req 객체)에 passport 설정을 심고, 

passport.session() 미들웨어는 req.session 객체에 passport 정보를 저장

req.session 객체는 express-session에서 생성하므로 passport 미들웨어는 express-session 미들웨어보다 뒤에 연결해야함



- passport/index.js 생성

### 로컬 로그인 구현

passport-local 모듈 필요 ~~이미 설치함~~

1. 회원가입, 로그인, 로그아웃 라우터를 만들어야함

   - 접근제한이 필요하므로 접근 권한 제어용 미들웨어를 만들자

	routes/middlewares.js생성

갑자기 isAuthenticated()란게 나오는데
[WebSecurity Object](https://www.w3schools.com/asp/webpages_security.asp) <- 이런게 있다고한다. 지식이 강제로 는다 야호!

아무튼 isAuthenticated()가 불린 값으로 쓰인다고한다

2. routes/page.js 수정

​		req.render 메서드의 user 속성에 req.user를 넣은 것에 주목하라고한다.

3. routes/auth.js 생성

- 회원가입: 아이디체크 -> 있으면 리다이렉트 else create user, 비밀번호 암호화
- 로그인: passport.authenticate('local') 사용
- 로그아웃

4. passport/localStrategy.js 생성

- 자연스레 await, async가 뛰쳐나오는데, 여튼 이게 아이디비교하고, 디비확인하고, -> 비밀번호 확인하고 하는 그런 역할이다
- 아직 auth라우터를 연결하지 않았으므로 코드동작 X

5. 카카오 로그인 구현

- passport가 웬만한 로그인들을 다 구현해놓은듯하다. 텐센트 qq, wechat도 여기서 로그인 제공해주는듯 나중에 확인해보자