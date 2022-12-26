const clock = document.querySelector("h2#clock");
/*
    interval : 매번 일어나야 하는 무언가 ex) 매 2초마다 무슨 일이 일어나게 하고 싶을 때 

*/
//clock.innerText = "00:00";

// 이 함수를 매 2초마다 실행하고 싶을 때
// function sayHello() {
//   console.log("hello");
// }

// setInterval : interval 설정 ~마다 반복되는 함수를 지정한다.
// setInterval(함수, 시간 간격) 5000 = 5초
//setInterval(sayHello, 5000);

// Timeout : 함수를 딱 한번만 호출하는데, 일정 시간이 흐른 뒤에 호출하는 것
//setTimeout(sayHello, 5000);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//const date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

/* 1초마다 현재 시간 분 초를 가져오고, clock.innerText = 를 설정해야한다.. 무한 */

// 가장 처음 브라우저가 자바스크립트 setinterval()을 읽어들일 때 1초의 딜레이가 발생한다.
// 들어오자마자 시간을 보여주고
getTime();
//setInterval(time, 1000); --> time 함수를 1초마다 반복한다.
setInterval(getTime, 1000);

// getTime 함수는 화면 clock에 현재 시간을 보여준다.
function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// padStart ; String형을 보다 길게 만들어야 할 때 사용함
// String형.padStart(2, "0") --> 두자리로 만들고 싶을 때. 두자리가 아니라면 앞에 "0"을 붙여서 강제로 자릿수를 맞춘다.
// console.log(typeof date.getSeconds()); -> date.getSeconds()의 형이 number니까 string으로 형변환해서
