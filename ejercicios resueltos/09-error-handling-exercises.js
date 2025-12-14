/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try{
    let array=[1,2,3]
    console.log(array.saludar())
}catch(error){
    console.log(`El error capturado es ${error.message}`)
}
// 2. Captura una excepción utilizando try-catch y finally
try{
    let array=[1,2,3]
    console.log(array.saludar())
}catch(error){
    console.log(`El error capturado es ${error.message}`)
}finally{
    console.log("Me ejecuto igualmente")
}
// 3. Lanza una excepción genérica
try{
    throw new Error("Lanzamiento de error generico ")
}catch(error){
    
    console.log(`El error capturado es ${error.message}`)
}finally{
    console.log("Me ejecuto igualmente")
}
// 4. Crea una excepción personalizada
function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new errorPersonalizado("Se está intentando sumar cero", a, b)
    }
    return a + b
}

class errorPersonalizado extends Error {
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
        
    }
    lanzarErrorPersonalizado(){
            console.log(this.a, "+ ",this.b)
        }

}
try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.lanzarErrorPersonalizado()
  
}
// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10