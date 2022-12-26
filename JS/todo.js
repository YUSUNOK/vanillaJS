const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");

const TODOS_KEY = "TodoList";
function deleteTodo(event) {
  this.parentElement.remove(); // === todoList.removeChild(event.target.parentElement);
  // event.target : 클릭된 HTML element다.
  // event.target.parentElement : 클릭된 element의 부모다.
  // htmlelement.remove() --> 해당 htmlElement 제거
}

function deleteTodo(event) {
  const deleteId = event.target.parentElement.id; // localStorage에서 삭제할 id이다.

  let todoObject = JSON.parse(localStorage.getItem(TODOS_KEY));

  //   for (let i = 0; i < todoObject.length; i++) {
  //     if(todoObject[i].id == deleteId) {
  //       todoObject.splice(i, 1);
  //     }
  //   }

  todoObject = todoObject.filter((item) => item.id != deleteId);
  event.target.parentElement.remove(); // 화면상에서 삭제를 한다.

  localStorage.setItem(TODOS_KEY, JSON.stringify(todoObject));
}

/*
    객체 = 객체.filter((item) => item.property    -----------------> 여기에서 true가 되어야 남아있는다.
    여기서 false가 나오면 제거되는 것 
    https://geometery-programing.tistory.com/23
    );


*/
function printTodo(newTodoObj) {
  const li = document.createElement("li"); //document안에 createElement가 있는 것이다.
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodoObj.text;
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  li.id = newTodoObj.id;
  todoList.appendChild(li);
}
function onSubmit(event) {
  event.preventDefault(); // form의 기본 행동인 새로고침을 막는다.
  const nowTodo = todoInput.value; // input의 현재 value를 새로운 변수 nowTodo에 복사하는 것이다.
  todoInput.value = "";
  const newTodoObj = {
    text: nowTodo,
    id: Date.now(),
  };
  localSave.push(newTodoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(localSave));

  //localStorage에 저장하는 함수
  //localAdd(nowTodo);
  printTodo(newTodoObj);
}
todoForm.addEventListener("submit", onSubmit);

//localStorage는 텍스트로 밖에 저장이 안된다.
//JSON.stringify() -- > 그 어떤 코드건간에 그형태그대로 string형태로 바꿔준다.
//JSON.parse("") --> ""의 내용을 JS가 이해할 수 있는 객체형태로 바꿔준다.

const preTodo = localStorage.getItem(TODOS_KEY); // preTodo : localStorage에 저장된 할일 리스트가 string형태로 저장되어있음

// function sayHello(item) {
//   // JS는 지금 처리되고 있는 item또한 그냥 제공해준다.
//   console.log(`${item} sayHello`);
// }
let localSave = [];
const parsedToDos = JSON.parse(preTodo);
if (parsedToDos !== null) {
  localSave = parsedToDos;
}

if (preTodo) {
  // 새로고침을 해도 localStorage에 그대로 저장되어 잇다.
  // 만약 localStorage에 값이 들어있다면,

  // localStorage에 저장되어 잇는 기존의 값을 JS가 인식할 수 있는 객체 형태로 parsedToDos에 저장한다.
  // parsedToDos : localStorage에 들어잇는 할 일 리스트가 JS 객체형태로 저장

  // JS array에 forEach함수가 있는데
  // forEach : 함수를 실행해주는데 array 에 있는 각각의 item에 대해 실행해준다.
  // JS는 지금 처리되고 있는 item또한 그냥 제공해준다.

  // 현재 배열형태인 parsedtoDos의 각각의 item에 대해 printTodo함수를 실행해준다.
  // 인수를 넘겨주지 않아도 되는게 array형태에게 지원해주는 forEach 함수는 지금 처리되고 있는 item을 첫번째 argument로 넘겨준다.
  parsedToDos.forEach(printTodo);

  /*
    Array.forEach((item) => console.log("this is the turn of ", item));
    ==
    function sayHello(item){
        console.log(`this is the turn of ${item}`);
    }
    Array.forEach(sayHello);
    과 같은 내용이다. 

    => (= 화살표함수 =  arrow function)이라고 부른다.
  */
}
