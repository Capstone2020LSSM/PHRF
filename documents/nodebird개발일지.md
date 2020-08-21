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