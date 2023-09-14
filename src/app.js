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
  let action = ["preparó", "cambió", "corrió hacia", "rompió"];
  let object = ["el regalo", "el piso", "el baño", "la pelota", "la sorpresa"];
  let where = [
    "en el evento de revelación",
    "en el parque",
    "en el segundo piso",
    "en el patio de la casa",
    "en la academia Tempo"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    object[objectIndex] +
    " " +
    where[whereIndex]
  );
};
