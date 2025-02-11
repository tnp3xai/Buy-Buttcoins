const body = document.querySelector("body");
const clicker = document.querySelector("#clicker")
clicker.addEventListener("click", sfyl);

const blinker = document.createElement("h1");
const blinkerText = document.createTextNode("SORRY FOR YOUR LOSS");
blinker.appendChild(blinkerText);

function sfyl() {
    clicker.replaceWith(blinker);
}
