import "./index.css";
import Icon from "./assets/download.png";

const head = document.createElement("h1");
head.innerText = "MyNotes";

const myLogo = document.createElement("img");
myLogo.src = Icon;

document.getElementById("top").append(myLogo, head);

let right = document.getElementById("right");

let btn = document.getElementById("btn");
let arr = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes(arr);

btn.addEventListener("click", () => {
  let note = document.getElementById("note");
  arr.push(note.value);

  localStorage.setItem("notes", JSON.stringify(arr));
  displayNotes(arr);
});

function displayNotes(arr) {
  right.innerHTML = "";
  let div = document.createElement("div");
  arr.map((elem, index) => {
    let p = document.createElement("p");
    p.textContent = `${index + 1}  ` + `${elem}`;

    div.append(p);
  });
  right.append(div);
  document.getElementById("root").append(right);
}
