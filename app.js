// const h1 = document.querySelector("#first h1:first-child");
// console.dir(h1);
// h1.addEventListener("click", function whenClick() {
//   const correntColor = h1.style.color;
//   let nowColor;
//   if (correntColor === "tomato") {
//     nowColor = "blue";
//   } else {
//     nowColor = "tomato";
//   }
//   h1.style.color = nowColor;
// });
// h1.addEventListener("mouseenter", function whenMouseEnter() {
//   h1.innerText = "Mouse Enter!";
// });
// function whenMouseEnter() {
//   h1.innerText = "Mouse Enter!";
// }
// h1.onmouseenter = whenMouseEnter;
// h1.addEventListener("mouseleave", function whenMouseLeave() {
//   h1.innerText = "Mouse Leave!";
// });

// window.addEventListener("resize", function windowResize() {
//   this.document.body.style.backgroundColor = "red";
// });

// window.addEventListener("copy", function online() {
//   this.alert("Opps copy!");
// });

const h1 = document.querySelector("#first h1");
console.log(h1);
console.dir(h1);
function handleTitleClick() {
  const changeClass = "active";
  h1.classList.toggle(changeClass); //changeClass인 active가 class명에 포함되어있으면 이 class명을 제거하고 없으면 추가하는 toggle 함수 편하다.
}
h1.addEventListener("click", handleTitleClick);
