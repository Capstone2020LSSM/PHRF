# PHRF
*Personal Health Record for foreigner*



외국인 관광객을 위한 개인 진료기록 관리 앱



ER다이어그램이라기엔 많이 이상하지만 대략 다이어그램

![medi_beta](https://user-images.githubusercontent.com/40845064/90759106-f195c280-e31a-11ea-9872-33fe6828cf4b.jpg)



계획



앱 -> React Native

Express (Web Frame work)

서버 -> Node.js

Sequlize (ORM)

DB -> PostgreSQL



## git 사용법(나의)

1. 깃허브로부터 가져와서 동기화

```bash
git pull origin seungmin_workspace
```

2. 새 브랜치 생성 및 이동

```bash
git checkout -b new_branch
```

3. 작업함(**중요**)
4. 작업한 내용(파일의 변동)을 로컬에 add함

```bash
git add .
```

**루트 폴더로 돌아와서 해줘야됨. 안그럼 해당 폴더 아래만 add됨**
5. 커밋 메시지를 작성

```bash
git commit -m "add some new features"
```

6. 레포지토리에 작업한 브랜치 명으로 새 브랜치를만들어서 푸쉬함

```bash
git push origin new_branch
```

7. git 해당 레포지토리에서 seungmin_workspace 브랜치로 풀리퀘스트
8. 다시 로컬환경으로 돌아와  seungmin_workspace브랜치로 이동

```bash 
git checkout seungmin_workspace
```

9. 그리고 깃허브와 동기화해줌 

```bash
git pull origin seungmin_workspace
```

10. 사용했던 기존 new_branch 삭제

```bash
git branch -d new_branch
```

11. 이제 2번으로 돌아가 반복