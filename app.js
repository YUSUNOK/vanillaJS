const result = document.querySelector('#first h1:first-child');
console.dir(result);
result.addEventListener("click", function whenClick(){
  if(result.style.color != ''){
    result.style.color = "";
  }
  else{
    result.style.color = "blue";
  }
});