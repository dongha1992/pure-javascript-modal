# 라이브커넥트 사전과제

#### 사용 스택

바닐라 자바스크립트 + babel + css + http-server

#### quick start

git clone 이후

`yarn install`

build 시

`yarn build`

dev

`yarn dev`

http://localhost:8080/ 


#### 디렉토리 구조

````
src
 ┣ api // 사용하지 않음
 ┣ components
 ┃ ┗ CommonDialog.js
 ┣ constants // 사용하지 않음
 ┣ css
 ┃ ┗ style.css
 ┣ utils //사용하지 않음
 ┣ App.js // Class로 작성함.
 ┗ main.js // App.js 생성
````

#### 개선 가능 사항

- edit일 때를 기준으로 다르게 렌더하는 방법을 택했는데 중복되는 코드가 좀 있는 것 같습니다. 리팩토링을 한다면 edit/view일 때 코드를 나눠서 깔끔하게 작성하거나 아예 다른 컴포넌트/메서드를 렌더하는 식으로 바꿀 것 같습니다. 

#### 미비 사항

- 요구 사항 중 **Binding 가능 Events** 을 정확히 이해하지 못하여 구현하지 못 했습니다.
- API 중 setDataSource()를 구현하지 못 했습니다.

