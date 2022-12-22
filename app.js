while (true) {
  const age = parseInt(prompt("how old are you?"));
  console.log(typeof age);              
  console.log(age);    
  if (isNaN(age)) {
    alert("잘못입력했습니다. 다시 입력하세요");
  } else {
    if (age >= 20) {
      console.log("돈 여기 있습니다.");
    } else {
      console.log("술을 살 수 없어요 바바이 ~ ");
    }
    break;
  }
}
