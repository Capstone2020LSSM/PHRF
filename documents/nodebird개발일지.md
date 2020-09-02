# nodebird개발일지

시간 순으로 작성

1. package.json 작성 (npm init 해도됨)

2. ```bash
   npm i -g sequelize-cli
   npm i sequelize pg pg-hstore
   sequelize init
   ```

3. 추가로 폴더및 파일들을 생성시켜 이 상태로 만듬

![image](https://user-images.githubusercontent.com/40845064/90759432-5e10c180-e31b-11ea-97d9-3d5368f69d96.png)

4. ```bash
   npm i express cookie-parser express-session morgan connect-flash pug
   npm i -g nodemon
   npm i -D nodemon
   ```

   \+ app.js 작성

5. 중요한 정보(비밀키 등)을 dotenv를 사용하여 숨김

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

6. 퍼그 파일들 생성

   routes/page.js

   views/layout.pug

   views/main.pug

   views/profile.pug

   ~~아무튼 생성됨~~

7. dotenv를 사용해서 중요한 내용을 숨기자

config.json은 정적파일이라 dotenv를 못써먹으니

config.js파일을 만들어서 저장하자

참고로 postgreql url을 쓸라면

DATABASE_URL=postgres://아이디:비밀번호@링크URL:포트번호/디비명

이 형식을 지켜줘야한다

진짜

8. sequelize짱짱

DB연결 잘하고

sequelize형식대로 관계 형성하고 각각 테이블마다 js파일만들면

sequelize가 데이터베이스 상관없이 알아서 다 만들어준다

물론 오타 없이 잘 적어야겠지만