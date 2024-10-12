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

  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function genCarta() {
    let palo = palos[Math.floor(Math.random() * palos.length)];
    let numero = numeros[Math.floor(Math.random() * numeros.length)];

    let color = palo === "♥" || palo === "♦" ? "red" : "black";

    let colorPalo = `<p style="color: ${color};">${palo}</p>`;
    let colorNumero = `<p style="color: ${color};">${numero}</p>`;

    paloGen1.innerHTML = colorPalo;
    paloGen2.innerHTML = colorPalo;
    numeroGen.innerHTML = colorNumero;
  }

  genButton.addEventListener("click", genCarta);
  genCarta();
  setInterval(genCarta, 10000);
};
