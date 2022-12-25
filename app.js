const result = document.querySelector("#first h1:first-child");
console.dir(result);
result.addEventListener("click", function whenClick() {
  if (result.style.color != "") {
    result.style.color = "";
  } else {
    result.style.color = "blue";
  }
});
// result.addEventListener("mouseenter", function whenMouseEnter() {
//   result.innerText = "Mouse Enter!";
// });
function whenMouseEnter() {
  result.innerText = "Mouse Enter!";
}
result.onmouseenter = whenMouseEnter;
result.addEventListener("mouseleave", function whenMouseLeave() {
  result.innerText = "Mouse Leave!";
});

window.addEventListener("resize", function windowResize() {
  this.document.body.style.backgroundColor = "red";
});
