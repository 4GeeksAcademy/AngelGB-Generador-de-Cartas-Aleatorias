/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let paloGen1 = document.querySelector("#arribaizq");
  let paloGen2 = document.querySelector("#abajoder");
  let numeroGen = document.getElementById("centro");
  let genButton = document.getElementById("boton");

  function genCarta() {
    let palo = Math.floor(Math.random() * 4) + 1;
    let numero = Math.floor(Math.random() * 12) + 1;
    if (palo === 1) {
      palo = "♦";
    } else if (palo === 2) {
      palo = "♥";
    } else if (palo === 3) {
      palo = "♠";
    } else palo = "♣";
    if (numero === 10) {
      numero = "J";
    } else if (numero === 11) {
      numero = "Q";
    } else if (numero === 12) {
      numero = "K";
    }
    if (palo === "♥") {
      paloGen1.innerHTML = `<p style="color: red;">♥</p>`;
    } else paloGen1.innerHTML = `<p>${palo}</p>`;
    if (palo === "♥") {
      paloGen2.innerHTML = `<p style="color: red;">♥</p>`;
    } else paloGen2.innerHTML = `<p>${palo}</p>`;
    numeroGen.innerHTML = numero;
  }
  genButton.addEventListener("click", genCarta);
  genCarta();
  setTimeout(genCarta, 10000);
};
