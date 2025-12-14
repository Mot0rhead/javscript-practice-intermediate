/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
Este archivo contiene ejercicios prácticos sobre conceptos avanzados de funciones en JavaScript
*/

// 1. Crea una función que retorne a otra función
// Concepto: Higher-Order Functions (Funciones de orden superior)
// Las funciones que retornan otras funciones son útiles para crear closures y personalizar comportamiento
function retornarFuncion(a){
    return function(){ // Closure: la función interna recuerda el valor de 'a' del scope externo
        console.log(a)
    }
}
// Ejecución directa: creamos y ejecutamos la función en una sola línea
retornarFuncion("hola")() 

// Almacenamos la función retornada para usarla después
let result = retornarFuncion("Adios")
result()

// 2. Implementa una función currificada que multiplique 3 números
// Concepto: Currying - Transforma una función con múltiples argumentos en una secuencia de funciones
// Permite la aplicación parcial de argumentos y reutilización de funciones
function currying(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
// Aplicación parcial: vamos creando funciones especializadas
let a=currying(1) // Función que espera el segundo argumento
console.log(a)
let b=a(2) // Función que espera el tercer argumento
console.log(b)
let c = b(5) // Ejecución final con todos los argumentos
console.log(c)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
// Concepto: Recursión - Una función que se llama a sí misma
// Caso base: exponente === 0, retorna 1 (cualquier número elevado a 0 es 1)
// Caso recursivo: multiplica la base por la potencia de (base, exponente-1)
function recursiva(base,exponente){
    if(exponente == 0){
        return 1 // Caso base que detiene la recursión
    }
    return base * recursiva(base,exponente-1) // Llamada recursiva
}
console.log(recursiva(2, 3)); // Resultado: 8 (2*2*2)

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
// Concepto: Closure + Factory Pattern
// El closure mantiene el estado privado del contador entre llamadas
function createCounter(valorIncial){
    let contador = valorIncial // Variable privada mantenida por el closure
    
    return {
        increment: function (){
            contador++ // Modifica la variable privada
            return contador
        },
        decrement: function (){
            contador-- // Modifica la variable privada
            return contador
        },
        getValue: function(){ // Método para obtener el valor actual
            return contador
        }
    }
}

// Uso del contador con closure
let asignarValor= createCounter(10)
console.log(asignarValor.getValue()) // 10
console.log(asignarValor.decrement()) // 9
console.log(asignarValor.decrement()) // 8
console.log(asignarValor.getValue()) // 8

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
// Concepto: Parámetros Rest (...) - Captura múltiples argumentos en un array
function sumManyTimes(multiplier, ...numbers){
    const sum = numbers.reduce((total, num) => total + num, 0) // Suma todos los números
    return sum * multiplier // Multiplica la suma por el multiplicador
}

console.log(sumManyTimes(2, 1, 2, 3)) // (1+2+3)*2 = 12

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
// Concepto: Callbacks - Funciones pasadas como argumentos para ser ejecutadas más tarde
function sumWithCallback(numbers, callback){
    const sum = numbers.reduce((total, num) => total + num, 0)
    callback(sum) // Ejecuta el callback con el resultado
}

sumWithCallback([1, 2, 3, 4], (result) => {
    console.log(`La suma es: ${result}`) // La suma es: 10
})

// 7. Desarrolla una función parcial
// Concepto: Partial Application - Crear una nueva función con algunos argumentos predefinidos
function partial(fn, ...presetArgs){
    return function(...laterArgs){
        return fn(...presetArgs, ...laterArgs)
    }
}

// Ejemplo de uso
const multiply = (a, b, c) => a * b * c
const multiplyBy2 = partial(multiply, 2) // Predefinimos el primer argumento
console.log(multiplyBy2(3, 4)) // 2*3*4 = 24

// 8. Implementa un ejemplo que haga uso de Spread
// Concepto: Spread Operator (...) - Expande un array en elementos individuales
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combined = [...array1, ...array2] // Combina arrays
console.log(combined) // [1, 2, 3, 4, 5, 6]

// Spread en objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinedObj = { ...obj1, ...obj2 }
console.log(combinedObj) // { a: 1, b: 2, c: 3, d: 4 }

// 9. Implementa un retorno implícito
// Concepto: Implicit Return - Funciones flecha con retorno implícito (sin llaves)
const square = x => x * x // Retorno implícito
const add = (a, b) => a + b // Retorno implícito

console.log(square(5)) // 25
console.log(add(3, 7)) // 10

// 10. Haz uso del this léxico
// Concepto: Lexical this - Las funciones flecha capturan el valor de this del contexto exterior
const person = {
    name: "Jonathan",
    age: 27,
    
    // Función normal: this depende de cómo se llama la función
    sayAgeNormal: function(){
        setTimeout(function(){
            console.log(`Tengo ${this.age} años`) // this es undefined o window
        }, 100)
    },
    
    // Función flecha: this es el del contexto exterior (person)
    sayAgeArrow: function(){
        setTimeout(() => {
            console.log(`Tengo ${this.age} años`) // this es person
        }, 100)
    }
}

// person.sayAgeNormal() // Error: Cannot read property 'age' of undefined
person.sayAgeArrow() // Funciona: "Tengo 27 años"
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico