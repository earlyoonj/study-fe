# [Mission 2](https://github.com/learn-programmers/prgrms-fejs/issues/75)
## **1️⃣ TodoApp Upgrade**
    input / remove

### **Main / Component**
- [x] [**TodoList**](https://github.com/earlyoonj/studyjs/commit/c6742cffee7960038bb264af4ad467ff5f380159)
  - `TodoList.js`, `index.js`
    > TodoList 함수와 실행코드 파일 분리 후 index.html에서 로딩
  - isComplete
    > todo 클릭 시 삭선 처리
  - remove
    > todo 제거 버튼 추가
- [x] [**TodoInput**](https://github.com/earlyoonj/studyjs/commit/ec3525be7cec88e36ad2af020c83b67b8fb2ac47)
  - `App.js`, 
  - `onAddTodo`
    > `App.js`가 `TodoList`, `TodoInput` 컴포넌트를 관리하는 구조로 변경
- [x] [*TodoCount**](https://github.com/earlyoonj/studyjs/commit/2e6a437df06a0cdcbf46d01f79f21c5aca544a52)
  - totalCount
  - completedCount
    > Total: `Todo 개수` / Completed:  `완료 개수` 표시

### [**Sub / Event**](https://github.com/earlyoonj/studyjs/commit/ceeb5138339e69234543d87bac932b90f4c9b5bc)
  - [x] Event delegate
    > 추가/삭제로 인한 변동이 일어나는 각 todo가 아닌 상위 객체 `todoList`에 이벤트 위임
  - [x] Custom Event `removeAll`
    > 커스텀 이벤트를 App에서 수신하도록 작성
    > * depth가 깊어질 경우
    > * 데이터를 내려줄 필요 없는 경우
    > * 공용 기능일 경우

### [**Bonus**](https://github.com/earlyoonj/studyjs/commit/28a3cb166904aae530a7ad22e451f8335f74b1d5)
  - [x] Local Storage
    > * todo 데이터 하드 코딩 삭제 후 localStorage에 저장
    > * localStorage getItem, JSON parse 방어 처리를 위해 파일 분리
  - [x] Import & Export
