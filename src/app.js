/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById("number").innerHTML = randomNumber();
  let suit = (document.getElementById("top").innerHTML = randomSuit());
  document.getElementById("bottom").innerHTML = suit;

  function randomNumber() {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumber];
  }
  function randomSuit() {
    const suit = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    let result = suit[indexSuit];
    if (result === "♠" || result === "♣") {
      return result;
    } else {
      document.getElementById("top").style.color = "red";
      document.getElementById("bottom").style.color = "red";
      return result;
    }
  }
};
