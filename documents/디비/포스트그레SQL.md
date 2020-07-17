# 포스트그레SQL

### [tutorial](https://www.postgresqltutorial.com/) 따라가기 (해당 독스를 따라간다)

#### 1. 설치

- install PostgreSQL (windows 운영체제)
  1. 윈도우용 PostgreSQL 다운
  2. 설치
  3. 확인

가장 최근거인 ver 12.3을 설치했다

stack builder는 필수적이진 않은듯하다



![image-20200701203352193](C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701203352193.png)

아무튼 설치되었다



가장아래 SQL Shell (psql) 을 실행한다

![image-20200701203615852](C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701203615852.png)

포스트그레를 설치할때 [default]로 남겨놨던 부분들은 그냥 엔터를 치고 사용자의 암호는 자신이 설정했던 암호를 입력하면된다. (화면에 표기가안되어도 표기가되고있는것 인지하도록)



```psql
Postgres=# SELECT version();
```

"SELECT version();" 을 입력하면 현재 설치된 버전이 나온다

![설치확인](C:\Users\ssuw2\Pictures\캡스톤\포스트그레\설치확인.png)

 설치 끗

---

#### 2. 서버 연결하는 법

pgADMIN4를 사용해서 gui를 사용하거나 psql을 사용하면 되는데

- gui버전(pgADMIN)

1. 서버를 만들고

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701205422595.png" alt="image-20200701205422595" style="zoom:67%;" />

2. 이름 설정

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701205455388.png" alt="image-20200701205455388" style="zoom:67%;" />

3. 주소 및 비밀번호 설정 -> save

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701205551288.png" alt="image-20200701205551288" style="zoom: 67%;" />

4. postgres(데이터베이스)를 선택하고 Query tool 실행

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701205834213.png" alt="image-20200701205834213" style="zoom:67%;" />

(옆에 데이터베이스 모양에 화살표 달린아이콘이 Query tool이다)

5. Query tool 실행후 순서에 맞게 작성후 입력하면 결과가 나옴

![image-20200701211546659](C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701211546659.png)



- psql 로 연결

1. SQL Shell (psql) 을 실행한다

![image-20200701203615852](C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701203615852.png)

포스트그레를 설치할때 [default]로 남겨놨던 부분들은 그냥 엔터를 치고 사용자의 암호는 자신이 설정했던 암호를 입력하면된다. (화면에 표기가안되어도 표기가되고있는것 인지하도록)



2. "SELECT version();" 을 입력하면 현재 설치된 버전이 나온다

```psql
Postgres=# SELECT version();
```

![설치확인](C:\Users\ssuw2\Pictures\캡스톤\포스트그레\설치확인.png)



- 다른 어프리케이션으로 PostgreSQL 연결하기

ODBC 혹은 JDBC를 지원하는 어플리케이션들은 모두 가능하다.

(예시들)

- [Connect to PostgreSQL from PHP](https://www.postgresqltutorial.com/postgresql-php/connect/)
- [Connect to PostgreSQL from Python](https://www.postgresqltutorial.com/postgresql-python/connect/)
- [Connect to PostgreSQL from Java](https://www.postgresqltutorial.com/postgresql-jdbc/connecting-to-postgresql-database/)

#### 3. dvdrental 예제 데이터베이스 내 DB에 올리기

우선 예제 db를 다운받자 [여기](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. psql을 켜서 dvdrental 디비 생성

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701213726819.png" alt="image-20200701213726819" style="zoom: 80%;" />

2. 다운받은 dvdrental 예제 파일을 C:\dvdrental\dvdrentar.tar이되게끔 설정
3. cmd를 실행시키고 PostgreSQL가 설치되어있는 폴더의 bin 폴더로 이동

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701214005470.png" alt="image-20200701214005470" style="zoom:80%;" />

4. pg_restore 명령어를 사용

<img src="C:\Users\ssuw2\AppData\Roaming\Typora\typora-user-images\image-20200701214439813.png" alt="image-20200701214439813" style="zoom:80%;" />

```shell
C:\**\bin>pg_restore -U postgres -d dvdrental C:\dvdrental\dvdrental.tar
```

여기서 -U postgres는 로그인할 포스트그레스 서버의 유저를 의미하고

-d dvdrental 은 로드할 해당 데이터베이스를 의미한다.

암호(Password) 는 포스트그레스 유저의 비밀번호다.



이렇게하여 해당 디비를 나에게 로드할 수 있다.



...



[psql 명령어들](https://browndwarf.tistory.com/51)

---

포스트그레SQL은 데이터베이스이므로 여기에 어떻게 데이터를 넣을 수 있을지 찾아보자