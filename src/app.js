/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const imputWidth = document.querySelector("#imputWidth");
  const imputheight = document.querySelector("#imputheight");
  const carta = document.querySelector("#carta");
  const paloGen1 = document.querySelector("#arribaizq");
  const paloGen2 = document.querySelector("#abajoder");
  const numeroGen = document.getElementById("centro");
  const genButton = document.getElementById("boton");

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
  function TamañoCarta(tamaño) {
    if (tamaño.key === "Enter") {
      let width = imputWidth.value || 400;
      let height = imputheight.value || 600;
      carta.style.width = `${width}px`;
      carta.style.height = `${height}px`;

      // let fontSize = height * 0.15;
      // carta.style.fontSize = `${fontSize}px`;
    }
  }
  imputWidth.addEventListener("keydown", TamañoCarta);
  imputheight.addEventListener("keydown", TamañoCarta);

  genButton.addEventListener("click", genCarta);
  genCarta();
  setInterval(genCarta, 10000);
};
