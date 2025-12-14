/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
 function sum(a,b){
    return a+b
}
console.log(sum(2,2))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNumeros=[1,8,3,4]
 function numeroMayor(arrayNumeros){
    let mayor =0
    for(let i =0 ; i <= arrayNumeros.length-1 ; i++){
        if(arrayNumeros[i]>mayor){
            mayor = arrayNumeros[i]
        }
    }
    return mayor
}
let result = numeroMayor(arrayNumeros)
console.log(result)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadenaTexto="turyioemcaaa"
let vocales = ['a', 'e', 'i', 'o', 'u']
 function contadorVocales(String){
    let numeroVocales = 0
    for(let i =0 ; i <= String.length-1 ; i++){
        if(vocales.includes(String[i])){
            numeroVocales ++
        }
    }
    return numeroVocales
}
 result = contadorVocales(cadenaTexto)
console.log(result)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
 let arrayString = ["hola","soy","jonathan"]
 function stringMayus(arrayString){
    let arrayStringMayus = []
    for (let i=0; i<arrayString.length;i++){
        arrayStringMayus.push(arrayString[i].toUpperCase())
    }
    return arrayStringMayus
 }
 result = stringMayus(arrayString)
 console.log(result)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const primo = function(int){
    if (int <= 1) {
    console.log(`El número ${int} no es primo`);
    return;
  }

  for (let i = 2; i < int; i++) {
    if (int % i === 0) {
      console.log(`El número ${int} no es primo`);
      return;
    }
}
}
primo(4)
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const elementosComunes = (array1,array2)=>{
    const cuenta = new Map()
    const resultado = new Set()

   for( const num of array2){
    cuenta.set(num,(cuenta.get(num)||0)+1);
   }
   for (const num of array1){
    if(cuenta.get(num)){
        resultado.add(num)
     
      
    }
   }
   return Array.from(resultado)
}
console.log(elementosComunes([1,4,1,4],[0,2,4,4]))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaArray = (array1)=>{
let suma= 0
    for(const num of array1){
        suma += num
    }
    return suma
}
console.log(sumaArray([10,14,20]))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const arrayElevadoQuadrado = (array) =>{
let arrayElevado= []
    for(const num of array){
        arrayElevado.push(num*num)
    }
    return arrayElevado
}
console.log(arrayElevadoQuadrado([2,3,6]))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const cadenaReversa = (cadena)=>{
let cadenaReversa=""
    for(const letra of cadena){
        console.log(letra)
        cadenaReversa = letra+cadenaReversa
    }
    return cadenaReversa
}
console.log(cadenaReversa("Hola que tal"));
// 10. Crea una función que calcule el factorial de un número dado