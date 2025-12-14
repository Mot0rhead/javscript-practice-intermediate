// codigo asincrono

console.log("Inicio")
for(let i = 0; i<100000; i++){

}
console.log("Fin")


// Event Loop (Bucle de eventos)

// Componentes del Event Loop
// 1. Call Stack(Pila de ejecucion)
// 2. Web APIs (APIs del navegador) o Node.js
// 3. Task Queue (Cola de tareas) y MicrotaskQueue

// Fluyo del Event Loop:
// 1. Call Stack ( pila de ejecuciones )
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en Task Queue
// 4. Si Call Stack vacio -> Mueve tareas del MicroTask( o Task Queue) al Call Stack
// 5. Se repite el proceso

// Codigo asincrono

// - Callback 
console.log("Inicio")
setTimeout(()=>{
    console.log("Esto se ejecuta") // se ejecuta despues por el fluyo del Event Loop
})
console.log("Fin")

// - Problema: Callback Hell

function step1(callback){
    setTimeout(()=>{
    console.log("Paso 1 completado")
     callback()
    },1000)
}
function step2(callback){
    setTimeout(()=>{
    console.log("Paso 2 completado")
     callback()
    },1000)
}
function step3(callback){
    setTimeout(()=>{
    console.log("Paso 3 completado")
     callback()
    },1000)
}
step1(()=>{ 
    step2(()=>{
        step3(()=>{
                            // ---> CALLBACK HELL . Anidar sin fin 
        })
    })
    console.log("Todos los pasos completados")
})

// - Promesas

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const ok = true
        if (ok){
            resolve("Operacion exitosa")
        }else{
            reject("Se ha producido un error")
        }
    },4000)
})
promise
    .then(result => {
     console.log(result) // en caso de que la promesa funcione se ejecuta esto
    })
    .catch(error =>{
      console.log(error) // en caso de que la promesa falle se ejecuta esto
    })


// - Encadenar promesas

function step1Promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Paso 1 con promesa completado")
            resolve()
        },1000)
    })
}
function step2Promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Paso 2 con promesa completado")
            resolve()
        },1000)
    })
}
function step3Promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Paso 3 con promesa completado")
            resolve()
        },1000)
    })
}
step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=>{
            console.log("Todos los pasos con promesas completados")
    })

    // - Async/Await
function wait(ms){
    return new Promise(resolve => {
                        setTimeout(resolve,ms)
                        })
}
 async function process(){
        console.log("Inicio proceso")
       await wait(5000) // pausa la ejecucion hasta que la promesa se resuelva
       console.log("Proceso despues de 5 segundos")

        await wait(2000)
       console.log("Proceso despues de 2 segundos")

        await wait(1000)
       console.log("Proceso despues de 1 segundos")
       console.log("Final proceso")
    }