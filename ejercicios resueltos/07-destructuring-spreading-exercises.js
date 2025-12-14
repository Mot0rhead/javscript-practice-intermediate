/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray=[11,23,3,4]
let [myValue0,myValue1]=myArray
console.log(myValue0,myValue1)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2,,,,myValue3=0]=myArray
console.log(myValue2,myValue3)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let datos={
    idioma: "es",
    pais: "España",
    altura: 1.54,
    peso: 55,
    cara: {
        ojos:"verdes",
        pelo:"rubio"
    }
}
let {idioma,pais} = datos
console.log(idioma,pais)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {altura: altura1,peso: peso1} = datos
console.log(altura1,peso1)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {cara:{ojos: ojazos}, cara:{pelo:pelazo}} = datos
console.log(ojazos,pelazo)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 =[1,2]
let array2 =[3,2]
let arrayCombinado = [...array1,...array2]
console.log(arrayCombinado)
// 7. Usa propagación para crear una copia de un array
let array3 =[1,2]
let copia =[...array3]
console.log(copia)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let datosMios = {
    ...datos,
    nombre:"jonathan"
}
console.log(datosMios.cara.ojos, datosMios.nombre)
// 9. Usa propagación para crear una copia de un objeto


// 10. Combina desestructuración y propagación
let arrayBase=[10,20,30,40]
let[arrayvalue0,arrayValue1]=arrayBase
arrayValue1= [...arrayBase,arrayvalue0,5,6]
let obj1={
    numero1: arrayvalue0
}

let obj2 ={
    ...obj1,
    casa: "Mi casa"
}
console.log(obj1.numero1)
console.log(arrayValue1)