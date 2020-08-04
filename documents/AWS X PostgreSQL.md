# AWS X PostgreSQL

1. AWS login
2. console -> [RDS](https://aws.amazon.com/ko/getting-started/hands-on/create-connect-postgresql-db/)

postgreSQL선택하고 **프리티어로** 선택

마스터유저 : masterUsername

pw : ~~



시키는대로 체크하고 다해서 create database하도록하자

(생성하는데 시간이 조금 걸린다)



[sql-workbench](http://www.sql-workbench.eu/downloads.html)를 다운받아서 aws로 올리란다

일단 따라하고 나중에 DBeaver로 해봐야겠다



workbench랑 dbeaver둘다 연결이 안되서 구글링해가지고 새로운 규칙 생성함

[timeout 스택오버플로우](https://stackoverflow.com/questions/52324170/aws-rds-for-postgresql-cannot-be-connected-after-several-hours)

슈밬 바로연결되었엄ㄴ어ㅏㄹ

왜 aws 튜토리얼대로했는데 안되는거였냐고오오오



ㅇㅋ



3. 내가 사용할 설정

instance : my-mediround

db :pre_medi

mater user : mediMaster

pw : master1234



그리하여 일단 aws에 디비를 생성할수있었다.

이제부터 관리는 DBeaver로하면될듯