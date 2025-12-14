/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

const saludar = function(nombre,callback){
    setTimeout(()=>{
        callback(nombre)
    },2000)
}
saludar("Jonathan",(result)=>{
    console.log(`Hola soy ${result}`)
})
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(()=>{
        callback()
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        callback()
    },1000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("Acaba la ejecucion de Callback Hell")
        })
    })
})



// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function promise(num){
    return new Promise((resolve,reject)=>{
       if (num % 2 === 0) {
            resolve("Número par")
        } else {
            reject("Número impar")
        }
    })
}
promise(4)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask(){
    return new Promise(resolve=>{
     setTimeout(()=>{
        console.log("Primera tarea completada")
     },1000)
     resolve()
    })
}
function secondTask(){
    return new Promise(resolve=>{
     setTimeout(()=>{
        console.log("Segunda tarea completada")
     },2000)
     resolve()
    })
}
function thirdTask(){
    return new Promise(resolve=>{
     setTimeout(()=>{
        console.log("Tercera tarea completada")
     },1500)
     resolve()
    })
}
firstTask()
    .then(secondTask)
    .then(thirdTask)
// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function wait(ms) {
   return new Promise(resolve =>{
    setTimeout(resolve,ms)
   })
}
async function executeTasks(){
    await wait(1000) // await siempre espera una promesa
    console.log("Primera tarea Async completada")
    await wait(2000)
    console.log("Segunda tarea Async completada")
    await wait(1500)
    console.log("Tercera tarea Async completada")
}
executeTasks()
// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         if(id < 5){
            console.log()
            resolve(`${id}, nombre: "Usuario " + ${id}`)
        }else{
            reject("Usuario no encontrado")
        }
        },2000)
    }) 
}
async function main (){
try{
let mensajeUser= await getUser(5)
console.log(mensajeUser)
}catch(error){
 console.error(error)
}
}
// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function promise1 (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Promise 1")
            resolve()
        },1000)
    })
}
function promise2 (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Promise 2")
            resolve()
        },2000)
    })
}
function promise3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Promise 3")
            resolve()
        },3000)
    })
}
Promise.all([
    promise1(),
    promise2(),
    promise3()
]).then(() =>{"Todas las promesas resueltas"})
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let saldoTotal = 0
let saldoRetirado = 0
function checkBalance(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(500)
        },1000)
    })
}
function withdrawMoney(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (saldoTotal >= 300){
            resolve(300)
        }else{
            reject()
        }
        },2000)
    })
}
async function cajero () {
saldoTotal = await checkBalance()
console.log(` Saldo disponible: ${saldoTotal}`)
saldoRetirado = await withdrawMoney()
saldoTotal = saldoTotal - saldoRetirado
console.log(` Retirando: ${saldoRetirado}`)
console.log(`  Operación exitosa, saldo restante: ${saldoTotal}`)
try{
saldoRetirado = saldoRetirado + await withdrawMoney()
}catch(error){
    console.log(`Error: Fondos insuficientes`)
}
}
cajero()