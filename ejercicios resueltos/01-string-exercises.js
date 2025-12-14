//var

//let
//console.log("Hello World!")
//const
/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 ="HolaW"
let cadena2 = "Que tal "
console.log(cadena1+cadena2)
// 2. Muestra la longitud de una cadena de texto
console.log("La longitud es: "+cadena1.length)
// 3. Muestra el primer y último carácter de un string
console.log("Primera letra: "+cadena1[0]+" Ultima letra: "+cadena1[cadena1.length-1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.indexOf("l"))
// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Hola
que Tal 
estas `
console.log(variasLineas)
// 6. Interpola el valor de una variable en un string
console.log(`${cadena1} que tal estas?`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConEspacion = " esto es una cadena con espacios "
console.log(cadenaConEspacion.replace(/ /g,""))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadenaConEspacion.includes("es"))
// 9. Comprueba si dos strings son iguales
if(cadena1==cadena1.replace(/ /g,"")){
    console.log("Son iguales")

}else{
    console.log("No son iguales")
}
// 10. Comprueba si dos strings tienen la misma longitud
if(cadena1.length==cadena2.length){
    console.log("Tienen la misma longitud")

}else{
    console.log("No tienen la misma longitud")
}