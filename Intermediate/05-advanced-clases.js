/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
function obj1(){
    name: "Jonathan"
}
obj1.prototype.saludar = function(){
    console.log(`Hola soy ${this.name}`)
}
// 2. Crea un objeto que herede de otro
let obj2 = Object.create(obj1)
// 3. Define un método de instancia en un objeto

// 4. Haz uso de get y set en un objeto

// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy