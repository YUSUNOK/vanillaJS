const images = ["0.png", "1.jpg", "2.jpg"];
const rand = Math.floor(Math.random() * (images.length - 1 - 0 + 1)) + 0;
const chosenimage = images[rand];

const bgImage = document.createElement("img");
// document.createElement("img") --> img라는 element를 생성한다.
bgImage.src = `IMG/${chosenimage}`;
console.log(bgImage);

// document.body.appendChild(bgImage) --> 만들어 놓은 htmlElement를 body 뒤쪽에 추가한다.(물론 script전)/ document.body.prependchild()는 앞에 추가
document.body.appendChild(bgImage);
