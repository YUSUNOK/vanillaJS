//*****1) 방법

//const loginForm = document.querySelector("#login-form");
//console.log(loginForm);

/*
    console.log(loginForm)의 결과 -- >
    <div id="login-form">
      <input type="text" placeholder="What is your name?" />
      <button>Log In</button>
    </div>
*/
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

/*
    <div id="login-form">
      <input type="text" placeholder="What is your name?" />
      <button>Log In</button>
    </div>이게 loginForm인것이고 여기서 태그 input, button을 찾아서 각각 변수에 넣음
*/

//*****2) 방법
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// 반복되는 string을 사용할 경우, 오타가 날 수 있으니, 상수를 만들어서 사용하자.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/*
    submit 이벤트는 form 태그에 있다.
    
    **페이지가 자동 새로고침 되는 경우 
    1)input안에 있는 button을 누르거나
    2)type이 submit인 input을 클릭하거나 
    3)form안에서 input에 값을 입력하고 더이상 남은 input이 없을 때 엔터를 누를 때

    ** 왜 새로고침을 막아야 될까?
    input에 무슨 값을 받아왔는지 알았으면 뭐하냐 새로고침 눌려서 리셋되는데
    새로고침이 일어나는 건 form submit의 기본 동작이다. 이를 막아줘야 한다. 

    함수명 + () : 함수를 '즉시'실행한다는 뜻

    브라우저는 해당 event가 발생시, 브라우저 내에서 event로부터 정보를 잡아내서 이 정보를 가지고 있는채로
    함수 호출 버튼을 누르고 있다. 함수를 호출할 때 첫번째 argument, 즉 추가적인 정보를 가진 채로 호출하게 된다.
    (즉, 브라우저가 '함수명(정보)'이런 형태로 어떠한 정보를 넣어서 함수를 호출한다는 말이다.)

    모든 eventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 들어간다. 
    우리는 argument 공간만 제공하면 js가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워 넣는다.
    argument 공간을 만들어주면 방금일어난 event에 대한 정보가 이 공간에 들어가는 것이고, 공간을 안만들어주면 정보를 받지 않겟다는 소리다. 
    --> 선택사항
    preventDefault함수는 기본행동(어떤 function에 대해 브라우저가 기본적으로 수행하는 동작)이 발생되지 않도록 막는 함수이다.
*/

function onSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  const localName = localStorage.getItem(USERNAME_KEY);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(localName);
}
loginForm.addEventListener("submit", onSubmit);

// 겹치는 동작은 함수로 만들어서 !
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // "hello " + username;과 같은 표현인데 백틱을 쓰는 것을 추천!
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const localName = localStorage.getItem(USERNAME_KEY);
if (localName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreetings(localName);
}
// function a(event) {
//   event.preventDefault();
//   console.dir(event);
//   alert("click");
//   // alert는 해당 페이지가 다른 동작을 하지 못하도록 막는다.
//   // alert ok 버튼을 눌러야 브라우저의 기본행동이 실행된다. --> 따라서 요즘엔 alert를 쓰지 않음
// }
// const alink = document.querySelector("a");
// alink.addEventListener("click", a);

/*
    local storage : 브라우저에 뭔가를 저장할 수 있게 해준다. 그래서 나중에 가져다 쓸 수 있다.
    f12 application localstorage에서 확인 할 수 있음
    https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage

    localStorage.setItem('myCat', 'Tom'); // 설정
    const cat = localStorage.getItem('myCat'); // 쓸 때
    localStorage.removeItem('myCat'); // 제거
    localStorage.clear(); // 항목의 전체 제거 구문
*/

// function NotReload() {
//   if (
//     (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) ||
//     event.keyCode == 116
//   ) {
//     event.keyCode = 0;
//     event.cancelBubble = true;
//     event.returnValue = false;
//   }
// }
// // document.onkeydown = NotReload; // === document.addEventListener("keydown", NotReload);
// document.addEventListener("keydown", NotReload);
