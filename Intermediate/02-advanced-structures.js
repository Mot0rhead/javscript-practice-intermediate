// Estructuras avanzadas
// Este archivo demuestra el uso avanzado de Arrays, Sets y Maps en JavaScript
// Estas estructuras son fundamentales para el manejo eficiente de datos

// ========================================
// ARRAYS AVANZADOS
// ========================================

// -Métodos funcionales (Functional Programming)
// Estos métodos permiten transformar y manipular arrays sin modificar el original

// forEach: Ejecuta una función para cada elemento del array
// No retorna nada, solo itera sobre los elementos
let numbers=[1,2,3,4]
numbers.forEach(element => console.log(element))

// map: Crea un nuevo array aplicando una función a cada elemento
// Útil para transformar datos sin modificar el array original
const doubled = numbers.map(element => element * 2)
console.log(doubled) // [2, 4, 6, 8]

// filter: Crea un nuevo array con elementos que cumplen una condición
// Ideal para filtrar datos según criterios específicos
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens) // [2, 4]

// reduce: Reduce el array a un único valor aplicando una función acumuladora
// Muy potente para sumas, productos, o cualquier operación de agregación
let sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum) // 10 (1+2+3+4)

// -Manipulación avanzada de arrays

// flat: Aplana arrays anidados hasta una profundidad especificada
// Útil para trabajar con datos jerárquicos o matrices
let nestedArray=[1,[2,[3,[4]]]]
let flatArray = nestedArray.flat(3) // Profundidad 3 para aplanar completamente
console.log(flatArray) // [1, 2, 3, 4]

// flatMap: Aplica map y luego aplana el resultado en una sola operación
// Más eficiente que hacer map seguido de flat(1)
let phrases = ["Hola mundo", "Adios mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words) // ["Hola", "mundo", "Adios", "mundo"]

// -Ordenación de arrays

// sort: Ordena los elementos del array
// IMPORTANTE: Por defecto ordena como strings, se necesita función de comparación para números
let unsorted = [2,5,1,6,23,7]
let sorted = unsorted.sort((a,b)=> a - b) // Función de comparación para orden numérico ascendente
console.log(sorted) // [1, 2, 5, 6, 7, 23]

// reverse: Invierte el orden de los elementos del array
console.log(sorted.reverse()) // [23, 7, 6, 5, 2, 1]
 
// -Búsqueda en arrays

// includes: Verifica si un elemento existe en el array (retorna booleano)
// Más legible que indexOf !== -1
console.log(sorted.includes(4)) // false

// find: Retorna el primer elemento que cumple una condición
// Útil cuando necesitas el elemento completo, no solo saber si existe
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven) // 2 (primer número par)

// findIndex: Retorna el índice del primer elemento que cumple una condición
// Útil cuando necesitas la posición del elemento
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex) // 1 (posición del primer número par)

// ========================================
// SETS AVANZADOS
// ========================================
// Los Sets son colecciones de valores únicos, sin duplicados
// Perfectos para trabajar con conjuntos y eliminar repeticiones

// -Operaciones con Sets

// Eliminación de duplicados en arrays
// La forma más eficiente de eliminar elementos repetidos
let arrayNumbers = [1,2,2,4,5,6,6]
let numbersNoRep = [...new Set(arrayNumbers)] // Spread operator para convertir a array
console.log(numbersNoRep) // [1, 2, 4, 5, 6]

// Unión: Combina todos los elementos de ambos sets sin duplicados
const setA = new Set([1,2,3])
const setB = new Set([2,4,5,6])
const setUnion = new Set([...setA, ...setB])
console.log(setUnion) // Set {1, 2, 3, 4, 5, 6}

// Intersección: Elementos que están en ambos sets
const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion) // Set {2}

// Diferencia: Elementos que están en setA pero no en setB
const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(diferencia) // Set {1, 3}

// -Iteración de Sets

// forEach: Itera sobre los elementos del Set
// Nota: El segundo parámetro es el mismo elemento (diferente de arrays)
setA.forEach(element => console.log(element * 2))
// Output: 2, 4, 6

// ========================================
// MAPS AVANZADOS
// ========================================
// Los Maps son colecciones de clave-valor, similares a objetos pero con diferencias clave:
// - Las claves pueden ser cualquier tipo (no solo strings)
// - Mantienen el orden de inserción
// - Tienen métodos específicos para manipulación

// Creación de un Map con valores iniciales
let myMap = new Map([
    ["name","jonathan"],
    ["age",27],
    [true, "boolean key"], // Clave booleana
    [{}, "object key"]    // Clave objeto
])

console.log(myMap)

// forEach en Maps: Recibe (valor, clave) - orden invertido respecto a arrays
myMap.forEach((value, key) => console.log(`Valor: ${value}, Key: ${key}`))

// -Conversiones entre Maps y otras estructuras

// Map a Array: Convierte el Map en un array de pares [clave, valor]
let arrayFromMap = Array.from(myMap)
console.log(arrayFromMap) // [["name","jonathan"], ["age",27], ...]

// Map a Objeto: Convierte el Map en un objeto (solo si las claves son strings)
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap) // {name: "jonathan", age: 27}

// Objeto a Map: Convierte un objeto en un Map
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Map {"name" => "jonathan", "age" => 27}

// -Métodos útiles de Maps

// get: Obtiene el valor de una clave
console.log(myMap.get("name")) // "jonathan"

// set: Añade o actualiza un par clave-valor
myMap.set("email", "jonathan@example.com")

// has: Verifica si existe una clave
console.log(myMap.has("age")) // true

// delete: Elimina un par clave-valor
myMap.delete(true)

// clear: Elimina todos los elementos
// myMap.clear()

// size: Obtiene el número de elementos
console.log(myMap.size) // 4