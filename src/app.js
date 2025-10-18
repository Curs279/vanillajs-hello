/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["Mi"];
  let subject = ["Hermano", "bebe", "perro", "padre", "hermana"];
  let action = ["preparó", "cambió", "perdió", "rompió"];
  let object = ["el regalo", "el baño", "la pelota", "la sorpresa"];
  let where = [
    "en el piso de 10 de mi trabajo",
    "en el parque",
    "en el segundo piso",
    "en el patio de la casa",
    "en la academia Tempo"
  ];
  function generateRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  let proIndx = generateRandomNumber(pronoun);
  let subjectIndex = generateRandomNumber(subject);
  let actionIndex = generateRandomNumber(action);
  let objectIndex = generateRandomNumber(object);
  let whereIndex = generateRandomNumber(where);

  return `${pronoun[proIndx]} ${subject[subjectIndex]} ${action[actionIndex]} ${object[objectIndex]} ${where[whereIndex]}`;
};
