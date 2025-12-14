/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let arrayAnimales1 =[]
let arrayAnimales2 = new Array("perro2","gato2")
arrayAnimales1 =["perro1","gato1"]
let arrayAnimales3 = ["perro3","gato3"]
console.log(arrayAnimales2)
console.log(arrayAnimales3)
// 2. Añade dos más. Uno al principio y otro al final
arrayAnimales3.unshift("gallina3")
arrayAnimales3.push("caballo3")
console.log(arrayAnimales3)

// 3. Elimina el que se encuentra en tercera posición
console.log(arrayAnimales3.splice(2,1))
console.log(arrayAnimales3)
// 4. Crea un set que almacene cinco libros
let libreria = new Set(["libro1","libro2","libro3","libro4","libro5"])

console.log(libreria)

// 5. Añade dos más. Uno de ellos repetido
libreria.add("libro6")
libreria.add("libro6")
libreria.add("libro7")
console.log(libreria)
// 6. Elimina uno concreto a tu elección
libreria.delete("libro6")
console.log(libreria)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"]
])
meses.set(6,"Junio")
console.log(meses.has(5))
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(meses.has(5)){
    console.log(meses.get(5))
}else{
    console.log("No existe")
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano","[Junio,Julio,Agosto]")
console.log(meses)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray =[]
myArray = [1,2,3,4,5]
console.log(myArray)
console.log(typeof myArray)

let mySet = new Set(myArray)
console.log(mySet)
console.log(typeof mySet)

let myMap = new Map()
myMap.set("numeros",mySet)
console.log(myMap)
console.log(typeof myMap)
