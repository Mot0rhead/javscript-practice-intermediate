// Clase básica Person que representa a una persona con nombre y edad
class Person{
    // Constructor que inicializa las propiedades nombre y edad
    constructor (name,age){
        this.name= name
        this.age = age
    }
    // Método de instancia para saludar mostrando el nombre
    saludar(){
        console.log(`Hola soy ${this.name}`)
    }
}

// Creación de una instancia de Person
const person1 = new Person("jonathan",27)

// Llamada al método saludar
person1.saludar()

// Adición dinámica de un método solo a esta instancia (no a la clase)
person1.sayAge= function(){
    console.log(`Tengo ${this.age} años`)
}

// Uso del método dinámico y visualización del objeto
person1.sayAge()
console.log(person1)

// ========================================
// CLASES ABSTRACTAS
// ========================================

// Clase abstracta Animal que sirve como base para otros animales
// No puede ser instanciada directamente, solo heredada
class Animal{
    constructor(name){
        // Verificación para evitar instanciar la clase abstracta directamente
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    // Método abstracto que debe ser implementado obligatoriamente por las subclases
    makeSound(){
           throw new Error("Este metodo tiene que ser implementado por la subclase")
    }
}

// ========================================
// POLIMORFISMO
// ========================================

// Clase Cat que hereda de Animal y sobrescribe el método makeSound
class Cat extends Animal{
 constructor(name,edad){
    super(name) // Llama al constructor de la clase padre Animal
    this.edad = edad // Propiedad adicional específica de Cat
 }
 // Sobrescritura del método abstracto makeSound con implementación específica
 makeSound(){
    console.log("El gato hace MIAU") // Implementación concreta del método abstracto
 }
}

// Creación y uso de una instancia de Cat
const cat1 = new Cat("Gato con botas",1)
console.log(cat1)
cat1.makeSound()

// Clase Dog que hereda de Cat (herencia múltiple indirecta)
// Hereda tanto de Animal como de Cat
class Dog extends Cat{

}
// Creación de una instancia de Dog que hereda comportamiento de Cat
const dog1 = new Dog("Perro con botas",2)
console.log(dog1)


// ========================================
// MIXINS - OTRA FORMA DE HERENCIA MÚLTIPLE
// ========================================

// Mixin FlyMixin que añade la capacidad de volar
// Un mixin es un objeto que contiene métodos que pueden ser añadidos a otras clases
const FlyMixin = {
    fly(){
        console.log(`${this.name} puede volaaar`)
    }
}

// Clase Bird que hereda de Animal
class Bird extends Animal{

}

// Asignación del mixin al prototipo de Bird para añadir la funcionalidad de vuelo
// Object.assign copia las propiedades del mixin al prototipo de la clase
Object.assign(Bird.prototype,FlyMixin) // sin prototype no funcionaria
 
// Creación de una instancia de Bird que ahora tiene métodos de Animal y del mixin
const bird1 = new Bird("Dragon colosal")
console.log(bird1)
bird1.fly() // Método proveniente del mixin FlyMixin

// ========================================
// PATRÓN DE DISEÑO - SINGLETON
// ========================================

// Implementación del patrón Singleton
// Garantiza que una clase solo tenga una instancia global y proporciona un punto de acceso único
class Session {
  
    constructor(user) {
        // Verificación si ya existe una instancia
        if(Session.instance ){
        return Session.instance // Devuelve la instancia existente en lugar de crear una nueva
        }
        // Si no existe instancia, se crea y se almacena
        this.user = user
        Session.instance = this
    }
    
}

// Demostración del patrón Singleton
const session1 = new Session("mot0rhead007")
console.log(`Usuario logeado`)
console.log(session1.user)
const session2 = new Session("nueva sesion") // Esta llamada no crea una nueva instancia
console.log(session2.user) // Muestra el mismo usuario que session1

// ========================================
// SYMBOLS - PROPIEDADES SEMI-PRIVADAS
// ========================================

// Symbol se usa para crear propiedades semi-privadas antes de ES2020 (#propiedadPrivada)
// Los Symbol son únicos y no son accesibles mediante enumeración estándar
const ID = Symbol("id")

class User {
    constructor(name){
        this.name=name
        // Propiedad usando Symbol como clave - semi-privada
        this[ID] = Math.random()
    } 
}
// Demostración del uso de Symbol
const user = new User("jonathan")
console.log(user.ID) // No se puede acceder directamente con el nombre del Symbol
console.log(user[ID]) // Se accede usando la referencia del Symbol
user[ID] = 1234 // Se puede modificar desde fuera de la clase (no es verdaderamente privada)
console.log(user[ID])

// ========================================
// INSTANCEOF Y OBJECT.CREATE
// ========================================

// instanceof: operador para verificar si un objeto es instancia de una clase
class Car  {}
const car = new Car()
console.log(car instanceof Car) // true: car es una instancia de Car

// Object.create: crea un nuevo objeto con el prototipo especificado
const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car) // true: anotherCar hereda el prototipo de Car

// ========================================
// PROXY - INTERCEPTACIÓN DE OPERACIONES
// ========================================

// Proxy: objeto que intercepta y personaliza operaciones fundamentales (get, set, etc.)
// Útil para validación, logging, y control de acceso a propiedades
const proxy = {
    // Intercepta la lectura de propiedades
    get(target, property){
        console.log("Se accede al get")
         return target[property]
    },
    // Intercepta la escritura de propiedades
    set(target, property, value){
        // Validación personalizada para la propiedad balance
        if(property === "balance" && value < 0){
            console.log("No puede ser 0")
        }else{
            target[property] = value
        }
    }
}
// Clase BankAccount que será envuelta con un proxy
class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

// Creación de una instancia de BankAccount envuelta en un proxy
const account = new Proxy(new BankAccount(100),proxy)
console.log(account.balance) // Acceso interceptado por el proxy
account.balance = 34 // Asignación válida
console.log(account.balance)
account.balance = -10 // Asignación rechazada por el proxy
console.log(account.balance)