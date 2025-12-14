// 1. Imprime por consola tu nombre si una variable toma su valor
let check = false
if(check == true){
    console.log("Hola me llamo Jonathan")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let username = "Francisco"
let password = 1234
if(username == "Francisco" && password == 1234){
    console.log("Login Correcto")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0

if(numero > 0  ){
    console.log("Numero positivo")
}else if(numero == 0 ){
      console.log("el numero es 0")
}else{
     console.log("Numero negativo")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad= 18
let message = edad >=18 ? "Adulto":"Menor"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma="en"

switch(idioma){
    case "es": console.log("Hola")
                break;
    case "en": console.log("Hi")
                break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7