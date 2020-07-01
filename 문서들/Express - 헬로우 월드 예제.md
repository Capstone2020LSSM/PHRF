# Express - 헬로우 월드 예제

문서대로 npm init 하기전 브랭치를 하나 만들었다.

(Node.js는 미리 설치해놓았다.)

```bash
ssuw2@DESKTOP-S04T3HK MINGW64 /d/workspace/Capstone/PHRF (master)
$ git checkout -b express
Switched to a new branch 'express'

ssuw2@DESKTOP-S04T3HK MINGW64 /d/workspace/Capstone/PHRF (express)
$ mkdir myapp

ssuw2@DESKTOP-S04T3HK MINGW64 /d/workspace/Capstone/PHRF (express)
$ cd myapp

ssuw2@DESKTOP-S04T3HK MINGW64 /d/workspace/Capstone/PHRF/myapp (express)
$ ls

ssuw2@DESKTOP-S04T3HK MINGW64 /d/workspace/Capstone/PHRF/myapp (express)
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (myapp)
```

이후엔 [설치 안내서](https://expressjs.com/ko/starter/installing.html)를 따라 express를 종속 항목으로서 설치하라는데...

npm init 이후론 사실 엔터만 눌렀다. 아직은 각자 무슨역할을 하는지 감이 안잡힌다;;;

그 이후엔 (--save로 설치하였다.)

```bash
npm install express --save  (package.json 파일 내의 dependencies 목록에 추가되고 나중에 app 디렉토리에서 npm install 실행시 종속 항목 목록 내의 모듈이 자동으로 설치됨)
/ or
npm install express   (임시로 설치)
```



myapp 디렉토리에 app.js 파일 작성

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```



실행

```bash
node app.js
```



결과

![image-20200701172104204](C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701172104204.png)

---

내 생각

Express는 node.js를 사용하여 서버랑 앱? 클라이언트를 이어주는 역할을 해주는것 같다.

아무래도 

**클라이언트(앱) <- Express & GraphQL(데이터 전송) -> 서버(PostgreSQL)**

이런 느낌이지 않나