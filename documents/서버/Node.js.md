# Node.js

사용한 책

> Node.js 교과서(조현영 저)
>
> <img src="http://image.yes24.com/goods/62597864/800x0" alt="Node.js 교과서" style="zoom:67%;" />

## 1. 노드 시작하기

- Node.js 란?

간단하게 말하자면 자바스크립트 기반으로 작동하는 서버다



1. 서버역할을 할수있다

2. 자바스크립트 런타임 == 자바스크립트를 실행할 수 있는 환경이다

3. 이벤트 기반
   - 이해 중
   - 



### 개발 환경 설정하기

모든것들의 시작이 노드였다. 노드부터 공부할걸

윈도우는 홈페이가서 다운받자. 딱히 설명할게 없는듯

나중에 쉘이나 배쉬에서

```power
node -v

npm -v
```

쳐주고 버전 나오면 된다

맥도 별 다를바는 없다



우분투

```bash
sudo apt-get update
sudo apt-get install -y build-essential
sudo apt-get install curl

curl -sl https://deb.nodesojurce.com/setup_10.x : sudo -E bash --
sudo apt-get install -y nodejs
```

다섯줄 중 뒤에 두줄만적어도되나 에러 가능성이 있어서 다적저(한줄씩)

끝나곤 똑같이 버전 체크해주자



## 2. 알아두어야 할 자바스크립트

2.1.1 var 말고 const, let 쓰자

2.1.2 `(백틱)으로 감싸면 안에 변수를 넣을 수 있음

예시)

```javascript
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);
```

2.1.3 객체 리터럴

객체 리터럴이 뭐지?



(여러가지 정보들)





정말 도움이 되었어요!

노드나 알아보러가자!

## 3. 노드 기능 알아보기

1. REPL

```bash
node
>
```

2. JS 파일 실행하기

js 파일 생성후(helloWorld.js)

```bash
// node [js 파일 경로]
node helloWorld (.js 붙여도 됨)
```



3. 모듈로 만들기

모듈이란? 

- 함수처럼 여러 프로그램에서 재사용할 수 있는 특정한 기능을 하는 함수나 변수의 집합(js 파일)

너무 남용하면 스파게티 코드가 된다고한다



4. 노드 내장 객체 알아보기

- global(전역 객체)
- console(global안에 들어있다. 보통 디버깅 목적으로 사용)







## 4. http 모듈로 웹 서버 만들기



## 5. 패키지 매니저



## 6. 익스프레스 웹 서버 만들기



