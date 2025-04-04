/* eslint-disable */
import "bootstrap";
import "./styles.css";
function generateExcuse() {
  let who = [
    "A sneaky chinchilla",
    "My deaf great-great-great-aunt",
    "The naked neighbour",
    "A wild coyote"
  ];
  let action = ["ate", "shredded", "crushed", "peed in"];
  let what = ["my pyjama", "my bobby car", "my bedroom", "my laptop"];
  let when = [
    "before class!",
    "while I was asleep!",
    "during recess!",
    "after my morning workout!"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
window.onload = () => {
  document.querySelector("#the-Excuse").innerHTML = generateExcuse();
};

function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}
