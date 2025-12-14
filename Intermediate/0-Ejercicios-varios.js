//🧠 1. Map vs Object (uso correcto)
//Ejercicio 1.1
//
//Implementa una función que reciba un array de eventos:
//
//[
//  { userId: 1, action: "login" },
//  { userId: 2, action: "logout" },
//  { userId: 1, action: "purchase" }
//]
//
//
//👉 Devuelve un Map donde:
//
//clave → userId
//
//valor → array de acciones de ese usuario
//
//Restricciones:
//
//No usar objetos planos {}.
//
//Debes usar Map.

const devolverMap = function(eventos){

  let eventosMap = eventos.map()
  
  console.log(eventosMap)
}
devolverMap()