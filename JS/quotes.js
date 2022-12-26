const quotes = [
  {
    quote: "harden my basement. let what you let go.",
    author: "유선옥",
  },

  {
    quote: "just like erockriceballs.",
    author: "유선옥",
  },

  {
    quote: "self-directed.",
    author: "유선옥",
  },

  {
    quote: "center of gravity.",
    author: "유선옥",
  },

  {
    quote: "push the envelope.",
    author: "유선옥",
  },

  {
    quote: "finish 30%.",
    author: "유선옥",
  },

  {
    quote: "I have to grow yourself.",
    author: "유선옥",
  },

  {
    quote: "finish today to-do list until today.",
    author: "유선옥",
  },

  {
    quote: "I can do whatever i want.",
    author: "유선옥",
  },

  {
    quote: "I want to be self-reliant.",
    author: "유선옥",
  },
];

const quoteContainer = document.querySelector("#quote");
const quote = quoteContainer.querySelector("span:first-child");
const author = quoteContainer.querySelector("span:nth-child(2)"); // == #quote span:last-child

/*
    - Math.random() -> 0 <= random < 1
    - a <= random <= b 
      Math.floor(Math.random()*(b-a+1)) + a

      have to do 0 <= random <= quotes.length -1
      ->  Math.floor(Math.random()*(quotes.length-1 - 0+1)) + 0;

      Math.round() --> 반올림 함수
      Math.ceil() --> 무조건 올림 함수 Math.ceil(1) -->1
      Math.floor() --> 무조건 내림 함수
*/

function quotePrint() {
  const rand = Math.floor(Math.random() * (quotes.length - 1 - 0 + 1)) + 0;
  quote.innerText = quotes[rand].quote;
  author.innerText = quotes[rand].author;
}

quotePrint();
