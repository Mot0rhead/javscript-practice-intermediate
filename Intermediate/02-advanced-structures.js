// Estructuras avanzadas

//Arrays avanzados

// -Metodos funcionales
// forEach

let numbers=[1,2,3,4]
numbers.forEach(element => console.log(element))

// map
numbers.map(element => console.log(element*2))

// filter
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((previous, current) => previous+current)
console.log(sum)

// -Manipulacion

// flat

let nestedArray=[1,[2,[3,[4]]]]

let flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adios mundo"]

let words = phrases.flatMap( phrase => phrase.split(" "))
console.log(words)

// -Ordenacion

// sort

let unsorted = [2,5,1,6,23,7]

let sorted = unsorted.sort((a,b)=> a - b)

console.log(sorted)

// reverse

console.log(sorted.reverse())
 
// -Busqueda

// includes
console.log(sorted.includes(4))

// find

let firtsEven = sorted.find(element => element % 2 === 0) // en caso de no encontrar devuelve undefined
console.log(firtsEven)

// findIndex

sorted.findIndex( element => element % 2 ===0)// en caso de no encontrar devuelve -1

// Sets avanzados Los sets se utilizan para no tener duplicados y para trabajar con conjuntos

// -Operaciones

// Eliminacion de duplicados

let arrayNumbers = [1,2,2,4,5,6,6]
let numbersNoRep= [...new Set(arrayNumbers)] // o arrayNumbers = [...numbersNoRep]
console.log(numbersNoRep)

// union

const setA = new Set([1,2,3])
const setB = new Set([2,4,5,6])

const setUnion = new Set([...setA, ...setB])

// Interseccion

const Interseccion = new Set([...setA].filter(element => setB.has(element)))

// diferencia

const diferencia = new Set([...sertA].filter( element => !setB.has(element)))

// -Iteracion

// foreach

setA.forEach(element => console.log(element*2))

// Maps avanzados

let myMap = new Map([
    ["name","jonathan"],
    ["age",27]
])

console.log(myMap)

myMap.forEach((value,key) => console.log(`Valor ${value} Key ${key}`))

// -Conversion

// Map a Array
let arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

//Mapa a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

//Objeto a mapa

const mapFromObject = new Map(Object.entries(objectFromMap))