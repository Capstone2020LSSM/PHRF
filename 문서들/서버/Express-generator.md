# Express-generator

## Express 시작

```bash
1. npm을 사용하여 express-generator을 설치
npm i -g express-generator

2. express-generator을 사용하여 프로젝트 생성
	/ express-generator은 Jade(모름)를 템플릿 엔진으로 설치하였지만 Pug로 개명하였음
express (learn-express==프로젝트 명) --view=pug

프로젝트 폴더로 이동하고 npm 인스톨 실행
cd learn-express && npm i
```

![image](https://user-images.githubusercontent.com/40845064/87317388-e43e2900-c561-11ea-8c47-53645a9cb3f8.png)

트리가 이렇게 생성되는데 

- bin의 www는 서버를 실행하는 스크립트
- public 폴더는 클라이언트 등에서 접근 가능한 파일들
  - img, css, js, etc..
- routes : 주소별 라우터들을 모아놓은 곳
- views : 템플릿 파일들을 모아놓은 곳

서버로직 -> routes

화면 -> views

데이터베이스 관련 데이터 -> models(폴더 생성)

```bash
npm start
```

express 코드 구성 해석

미들웨어 두둥등장!

## 미들웨어

요청과 응답의 중간에서 작용한다고 하여 미들웨어

req -> 미들  ->  서

res <- 웨어   <-  버

주로 app.use와 함께 사용된다

app.use는 뭘까

책에서 그림으로 설명을 잘해놓았다.

![image](https://media.vlpt.us/post-images/smooth97/38d5d2c0-0829-11ea-ab09-d73a57def2ce/image.png)



미들웨어는 next(); 가 무조건 있어야함

morgan

- app.use(logger('dev'));    ->    GET / 200 285.397 ms - 170

- app.use(logger('short'));    ->    ::1 - GET / HTTP/1.1 200 170 - 281.064 ms

- app.use(logger('common'));    ->    ::1 - - [13/Jul/2020:15:58:37 +0000] "GET / HTTP/1.1" 304 -

- app.use(logger('combined'));

  ​	->	::1 - - [13/Jul/2020:15:58:58 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"

개발 시 dev, short <-> 배포 시 combined, common

콘솔말고 파일이나 데이터베이스로 로그를 남기려면? -> winston 모듈



body-parser // 이제는 express 내부에 일부기능 포함되어 있음

그러나 JSON과 URL-encoded 형식 본문 말고 Raw, Text 형식의 본문 해석할 시 필요함



express-session

세션 관리용 미들웨어. 로그인 등

```bash
npm i express-session
```

많은 옵션이 있는데 나중에 store라는 옵션을 데이터베이스에 연결해놔야함.

현재 메모리에 세션을 저장하기에 서버 껏다키면 다 사라지기때문.

Redis가 자주 쓰임



connect-flash

일회성 메시지들을 웹브라우저에 나타낼 때 좋음 // 직접 설치해야함

```bash
npm i connect-flash
```

cookie-parser와 express-session을 사용해서 둘 뒤에 위치해야함

책 따라가며  코드 작성하고 확인할 수 있는것

http://localhost:3000/users/flash로 가면 http://localhost:3000/users/flash/result 로 리다이렉트 해주고 flash 메시지가 출력되지만 새로고침하면 사라짐



Router 객체로 라우팅 분리

첫번째 인자로 주소를 받아 특정 주소에 해당하는 요청이 왔을때만 동작가능

'/' 라면 routes/index.js

'/users' -> routes/users.js

use 대신 get, post, put, patch, delete 같은 HTTP 메서드 사용 가능



템플릿 엔진

1. Pug

Ruby와 비슷함. HTML과 많이 다름