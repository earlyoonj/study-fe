# [Mission 1](https://github.com/learn-programmers/prgrms-fejs/issues/49)
## **1️⃣ TodoList Component**
### [**Main**](https://github.com/earlyoonj/studyjs/commit/9dbad9a2f2089bd998bd4fc8af18cae41df1d151)
    data → render() → #todo-list

- [x] `render()`
    > TodoList 컴포넌트 작성
    > * 컴포넌트 내 `render()` 함수를 통해 `data`를 `#todo-list`에 html string으로 렌더링시킨다.
    ![image](https://media.discordapp.net/attachments/1024893676121489558/1024949982287110164/unknown.png)

### [**Sub**](https://github.com/earlyoonj/studyjs/commit/8e8c049ad7c7f83563ad48c2c540a2d8552f4269)
- [x] `isCompleted`
    > `data`에 `isCompleted(true/false)` 필드 추가 / 삭선 처리
    ![image](https://cdn.discordapp.com/attachments/1024893676121489558/1024959932413530192/unknown.png)
- [x] `setState(nextData)`
    > 새로운 `nextData`를 인자로 받아기존 `data` 대체 후 다시 렌더링
    ![image](https://cdn.discordapp.com/attachments/1024893676121489558/1024963231262986260/unknown.png)

### [**Bonus**](https://github.com/earlyoonj/studyjs/commit/388b166f8f34810f99a2923e10c3987a830a8e43)
- [x] validation
    > new 키워드, 파라메터에 대한 유효성 검증
    ![image](https://cdn.discordapp.com/attachments/1025373534605803570/1025400092775157830/unknown.png)
    ![image](https://cdn.discordapp.com/attachments/1025373534605803570/1025400368584212550/unknown.png)
    ![image](https://cdn.discordapp.com/attachments/1025373534605803570/1025404859618435213/unknown.png)
- [x] multiple Component 
    > 다른 data-DOM 객체에 대해 다중 컴포넌트 생성 가능하도록 변경
    ![image](https://cdn.discordapp.com/attachments/1025373534605803570/1025407892075065375/unknown.png)
