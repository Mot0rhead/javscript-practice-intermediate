/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Person{
    
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    presentacion(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
    static sumar(a,b){
        return a+b;
    }
}
let persona1= new Person("Miguel",17)
persona1.presentacion()
// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(persona1.nombre)
// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
console.log(Person.sumar(2,2))
// 6. Crea una clase que haga uso de herencia
class Jonathan extends Person{
    #trabajo
       constructor(nombre,edad,trabajo){
        super(nombre,edad)
        this.#trabajo= trabajo || ""
    }
     set trabajo(trabajo){
        this.#trabajo=trabajo
    }
    get trabajo(){
        return this.#trabajo
    }
    deQueTrabajo(){
        console.log(`Trabajo de ${this.trabajo}`)
    }
    presentacion(){
        console.log(`Hola soy ${ this.#trabajo} y tengo ${this.edad} años`)
    }
   
}
// 7. Crea una clase que haga uso de getters y setters 
let persona2 = new Jonathan("jonathan",27)
persona2.trabajo ="Vendedor"
console.log(persona2.trabajo)
persona2.deQueTrabajo()
persona2.presentacion()
// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 