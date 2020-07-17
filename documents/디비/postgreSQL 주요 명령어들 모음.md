# postgreSQL 주요 명령어들 모음

[정말 좋은 블로그 글](https://browndwarf.tistory.com/51)

## 유저

- 유저 생성

```psql
CREATE USER [유저명] WITH [옵션들 (예시 : ENCRYPTED PASSWORD '비밀번호')];
옵션들 예시
	SYSID uid 
    | CREATEDB | NOCREATEDB
    | CREATEUSER | NOCREATEUSER
    | IN GROUP groupname [, ...]
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD 'password'
    | VALID UNTIL 'abstime' 

CREATE USER 유저이름;
CREATE USER name WITH PASSWORD 'password';
CREATE USER name WITH PASSWORD 'password' VALID UNTIL '2005-01-01';
	// 해당 비밀번호 2005-01-01이후 효과없음
```

- 유저 변경

```psql
ALTER USER
```





## 데이터베이스

- 데이터베이스 생성

```psql
CREATE database 디비이름;
```



- 디비 접근

```psql
\c 디비명 사용자명;
\c dev_db postgres;
```



## 테이블

- 테이블 생성

```psql
CREATE TABLE table_name (
	column_name TYPE column_constraint,
	table_constraint table_constraint
) INHERITS existing_table_name;
```



## psql 명령어

```psql
\c 디비이름 유저명;

\list
\dt

\d 테이블명

\i 파일경로 (공유폴더 아니면 퍼미션 디나이드 뜸)
\i 'C:\Users\Public\Documents\postgreSQL\table_example.sql'
```

