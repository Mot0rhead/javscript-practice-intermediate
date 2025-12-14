/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let ordenador ={
    grafica : "6800xt",
    procesador: "AMD",
    precio: 2700,
    calcularPrecio: function(){
        console.log(10*this.precio)
    }
}

// 2. Accede y muestra su valor
console.log(ordenador.grafica)
// 3. Agrega una nueva propiedad
ordenador.refrigeracion= "Liquida"
console.log(ordenador.refrigeracion)
// 4. Elimina una de las 3 primeras propiedades
delete ordenador.procesador
// 5. Agrega una función e invócala
ordenador.calcularPrecio()
// 6. Itera las propiedades del objeto
for(let propiedad in ordenador){
    console.log(propiedad)
}
// 7. Crea un objeto anidado
let habitacion ={
    escritorio : "blanco",
    estanterias: "madera blanca",
    pc: {
            grafica : "6800xt",
            procesador: "AMD"
        }
    }

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(habitacion.pc.grafica)
// 9. Comprueba si los dos objetos creados son iguales
if(habitacion == ordenador){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
}

// 10. Comprueba si dos propiedades diferentes son iguales
if(habitacion.pc.grafica == ordenador.grafica){
    console.log("Tienen la misma grafica")
}else{
    console.log("No tienen la misma grafica")
   
}
