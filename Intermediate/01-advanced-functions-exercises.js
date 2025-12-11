/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function retornarFuncion(a){
    return function(){ // esto devolvera una funcion pero claro hay que ejecutarla por eso en la linea 12 ponemos () o ejecutamos result() en la linea 13 
        console.log(a)
    }
}
 retornarFuncion("hola")() 
 let result = retornarFuncion("Adios")
 result()

// 2. Implementa una función currificada que multiplique 3 números
function currying(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
let a=currying(1)
console.log(a)
let b=a(2)
console.log(b)
let c = b(5)
console.log(c)
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function recursiva(base,exponente){
    if(exponente == 0){
        return 1
    }
    return base * recursiva(base,exponente-1)

}
console.log(recursiva(2, 3)); // 6 4 2
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valorIncial){
    let obj={
        increment: function (valorIncial){
                return valorIncial++
        },
        decrement: function (valorIncial){
                return valorIncial--
        },
        get valorIncial(){
            return this.valorIncial
        }
    }
}
let asignarValor= createCounter(10)
asignarValor.decrement()
asignarValor.decrement()
asignarValor.va
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico