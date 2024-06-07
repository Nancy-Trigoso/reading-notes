"use strict";
//Pregunta 1 Cuál es tu nombre?
//const respuesta1 = "Nancy";
//Pregunta 2 En que empresa trabajas actualmente
//const respuesta2 = "Restaurante-Pizzeria Sabor Pizza";
//Pregunta 3 Cual es mi color favorito?
//const respuesta3 = "Negro";
//Pregunta 4 Dónde estudié?
//const respuesta4 = "Ramiro Priale Priale";
//Pregunta 5 Cuantos años tengo de experiencia?
//const respuesta5 = "2";

//Case sensible: Es sensible a mayusculas y minusculas
//let puntos = 0;

//const Pregunta1 = prompt("Cuál es tu nombre?");
//const Pregunta2 = prompt("En que empresa trabajas actualmente?");

//Comparamos la respuesta de la pregunta1 con el valor de la variable pregunta1
//Anderson- anderson                            anderson - anderson
//if (respuesta1.toLocaleLowerCase() === Pregunta1.toLocaleLowerCase()){
    //Operadores de asignacion
    //puntos=puntos+1; funciona
    // puntos ++  solo suma de 1 a 1
    //Operador de adicion que se recomienda
   // puntos+= 1;
//}

// // Al final analizar la cantidad de puntos y en base a ese numero dar un mensaje
// /**
//  * puntos === 5 (Me conoces dms ✅)
//  * puntos > 3 (Me conoces de vista 🧐)
//  * puntos < 3 (No me conoces 🙁)
//  */

const arregloTotal = [
    ["Nancy", "¿Cual es mi segundo nombre?"],
    ["Restaurante-Pizzeria Sabor Pizza", "¿En que empresa trabajo actualmente?"],
    ["Negro", "¿Cual es mi color favorito?"],
    ["Ramiro Priale Priale", "Donde estudie?"],
  ];


  // indices en los arreglos? (posicion de cada elemento dentro de mi arreglo)
// cual es la posicion inicial? 0
// console.log(arregloTotal[0]);
// console.log(arregloTotal[0][0]);
// console.log(arregloTotal[0][1]);
// console.log(arregloTotal[1]);
// console.log(arregloTotal[1][0]);
// console.log(arregloTotal[2]);
// console.log(arregloTotal[2][0]);

console.log("USANDO FOR");
for (let i = 0; i < arregloTotal.length; i++) {
  console.log(arregloTotal[i][1]);
  const respuesta = prompt(arregloTotal[i][1]);
}