// ciudadanos de primera clase

const saludo = function (name){
    console.log(`Hola ${name}`)
} // funcion guardada en una variable

function procesarSaludo(saludoFuncion,name){
    saludoFuncion(name)
} // funcion a la que se le pasa una funcion como parametro
procesarSaludo(saludo,"Jonathan")

function retornarSaludo(){
    return saludo
}// funcion que retorna otra funcion

const saludo2 = retornarSaludo() // igualamos la funcion a una variable
saludo2("Vicente") // llamamos  a esa funcion desde la varible y le pasamos la variable esperada

// Arrow Functions

// - Retorno implicito
const mult = (a, b) => a * b // cuando solo tiene que devolver un valor básico

// -this lexico
const handler ={
    name: "Jona",
    greeting: function(){
         console.log(`Hola ${this.name}`)// sin el this no cogeria el name por que no sabe a cual te refieres
    },
     arrowGreeting:() =>{
         console.log(`Hola ${this.name}`) // este this.name no funcionaria por que las arrow functions no cogen el contexto del objeto 
    } // funcion flecha en obj
}
handler.greeting()
handler.arrowGreeting();

//IIFE ( Inmediatly invoce function expresion) Funciones que se van a ejecutar en el momento en el que se definan

// - IIFE clasico
(function (){
    console.log("IIFE clasico")// si quitamos el punto y coma d la funcion anterior no funcionaria, por que si JS interpreta que esta funcion IIFE formarara parte de la llamada de arrowGreeting() 
})()                           // tambien podriamos poner el ; antes ;(function()...

// -IIFE Arrow Function
;(()=>{
console.log("IIFE Arrow Function")
})()

// Parametros Rest (...) Se utiliza cuando no sabemos cuantos parametros van a ser necesarios

function sum(...numeros){ // el parametro Rest (...)  genera una array y asi no va a tener problemas con los parametros que se le pasen
    let result = 0
    for( let numero of numeros){
        result += numero
    }
    return result
}
sum(1,2,3,4)

// Operador Spread(...)

const numbers = [1,2,3,4]

function sumWithSpread(a,b,c){
    return a+b+c
}
console.log(sumWithSpread(1,2,3)) // Sin spread
console.log(sumWithSpread(...numbers)) // Con spread. En vez de pasarle los numeros le pasamos un array de ,ademas, 4 posiciones y solo coge las 3 primeras

// Closures

function createConter(){
    let counter = 0
    return function executeCounter(){
        counter ++
        console.log(counter)
    }
  //  executeCounter()
}
const counter = createConter()
counter()
counter()
counter()
counter()

// Recursividad
function factorial(n){
    if(n <= 1){
        return 1
    }
    return  n* factorial(n-1) 
    
}
console.log(factorial(4))

// Funciones parciales

function partialSum(a){
    return function(b,c){
        return sum(a,b,c)
    
}
}
const sumWith = partialSum(2) // digamos que esta parte de la funcion es fija y se van cambiando los valores de b y c, como se ve en linea siguiente
console.log('sumWidth: '+sumWith(1,10))

// Currying Es como la funcion parcial pero pudiendo meter mas partes fijas

function currySum(a){
    return function(b){
        return function(c){
             return function(d){
            return sum(a,b,c,d)
        }
        }
    }
}
const sumAB = currySum(1)
const sumC = sumAB(3)
console.log(sumC(4)(3))

// Callbacks

function processData(data,callback){
   const result = (sum(...data))
    callback(result)
}
function processResult(...result){
    console.log(...result)
}
function processResult2(...result){  
    console.log(`El resultado es: ${result}`)
}
processData([1,2,10],processResult)
processData([1,2,10],processResult2)
processData([1,2,10],(result)=>{
     console.log(`Usando arrow function El resultado es: ${result}`)
})