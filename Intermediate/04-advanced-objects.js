// Objetos avanzados
// Este archivo demuestra conceptos avanzados de objetos en JavaScript
// Incluye prototipos, herencia, y métodos avanzados de manipulación de objetos

// ========================================
// PROTOTIPOS Y HERENCIA
// ========================================
// NOTA: Aunque el código comenta "esto ya no se usa", los prototipos siguen siendo fundamentales
// en JavaScript. Las clases modernas (ES6) son azúcar sintáctico sobre prototipos.

// Prototipos: La base de la herencia en JavaScript
// Cada objeto tiene un prototipo del cual hereda propiedades y métodos

let person = {
    name: "Jonathan",
    age: 27
}

// __proto__: Propiedad interna que apunta al prototipo del objeto
// NOTA: No se recomienda usar __proto__ en producción, es mejor usar Object.getPrototypeOf()
console.log(person.__proto__)

// Object.getPrototypeOf(): Forma estándar de obtener el prototipo
console.log(Object.getPrototypeOf(person))

// Añadir métodos dinámicamente al objeto
// Esto añade el método solo a esta instancia, no al prototipo
person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()
console.log(person)

// Herencia prototípica: Object.create()
// Crea un nuevo objeto con el prototipo especificado
let programador = Object.create(person) // programador hereda de person
programador.language = "Javascript"     // Propiedad propia de programador
console.log(programador.language)

// Sobrescribir propiedades heredadas
programador.name = "Antonio"
console.log(programador.name)

// Los métodos heredados funcionan correctamente
programador.sayAge()
console.log(programador)

// ========================================
// MÉTODOS ESTÁTICOS Y DE INSTANCIA (ESTILO ANTIGUO)
// ========================================
// Antes de ES6, se usaban funciones constructoras con prototipos

function Person(name, age){
    // Propiedades de instancia (se crean para cada objeto)
    this.name = name
    this.age = age
}

// Método de instancia: se añade al prototipo
// Todas las instancias compartirán este método (eficiente en memoria)
Person.prototype.saludo = function(){
    console.log(`Holaa soy ${this.name}`)
}

// Método estático: se añade directamente a la función constructora
// Se llama sobre la clase, no sobre instancias
Person.createAdult = function(name){
    return new Person(name, 18)
}

let new_Person = new Person("Jona", 16)
new_Person.saludo()

// Uso de método estático
let adult = Person.createAdult("Adulto")
console.log(adult)

// ========================================
// MÉTODOS AVANZADOS DE OBJECT
// ========================================

// Object.assign(): Copia propiedades de uno o más objetos a un objeto destino
// Útil para combinar objetos o crear copias
let person_core = {name: "Jonathan"}
let person_details = {age: 27, alias: "Mot0rhead"}

// Copia todas las propiedades de person_details a person_core
let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson)
// Output: {name: "Jonathan", age: 27, alias: "Mot0rhead"}

// Object.assign() también puede crear copias de objetos
const original = {a: 1, b: 2}
const copy = Object.assign({}, original)
console.log(copy) // {a: 1, b: 2}

// ========================================
// MÉTODOS DE INSPECCIÓN DE OBJETOS
// ========================================

// Object.keys(): Retorna un array con las claves (propiedades) del objeto
const keys = Object.keys(fullPerson)
console.log(keys) // ["name", "age", "alias"]

// Object.values(): Retorna un array con los valores del objeto
const values = Object.values(fullPerson)
console.log(values) // ["Jonathan", 27, "Mot0rhead"]

// Object.entries(): Retorna un array de arrays [clave, valor]
// Muy útil para iterar sobre objetos o convertir a Map
const entries = Object.entries(fullPerson)
console.log(entries) // [["name", "Jonathan"], ["age", 27], ["alias", "Mot0rhead"]]

// Ejemplo práctico: Iterar sobre un objeto usando entries
console.log("\nIteración sobre el objeto:")
Object.entries(fullPerson).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

// ========================================
// PROPIEDADES Y DESCRIPTORES
// ========================================

// Object.defineProperty(): Define o modifica propiedades con control total
const user = {
    firstName: "John",
    lastName: "Doe"
}

// Definir una propiedad computada con getter y setter
Object.defineProperty(user, 'fullName', {
    get: function() {
        return `${this.firstName} ${this.lastName}`
    },
    set: function(value) {
        const parts = value.split(' ')
        this.firstName = parts[0] || ''
        this.lastName = parts[1] || ''
    },
    enumerable: true,  // La propiedad aparecerá en bucles
    configurable: true // La propiedad podrá ser reconfigurada o eliminada
})

console.log(user.fullName) // "John Doe"
user.fullName = "Jane Smith"
console.log(user.firstName) // "Jane"
console.log(user.lastName)  // "Smith"

// Object.getOwnPropertyDescriptors(): Obtiene todos los descriptores de propiedades
const descriptors = Object.getOwnPropertyDescriptors(user)
console.log(descriptors)

// ========================================
// PREVENCIÓN DE MODIFICACIONES
// ========================================

const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
}

// Object.preventExtensions(): Impide añadir nuevas propiedades
Object.preventExtensions(config)
// config.newProp = "value" // Error en modo estricto, ignorado en modo no estricto

// Object.seal(): Impide añadir o eliminar propiedades, pero permite modificar existentes
Object.seal(config)
// delete config.timeout // Error
config.timeout = 6000 // Permitido

// Object.freeze(): Impide cualquier modificación (añadir, eliminar, o modificar propiedades)
Object.freeze(config)
// config.timeout = 7000 // Ignorado
// config.newProp = "value" // Ignorado

// Verificar el estado del objeto
console.log("Extensible:", Object.isExtensible(config))    // false
console.log("Sellado:", Object.isSealed(config))           // true
console.log("Congelado:", Object.isFrozen(config))         // true

// ========================================
// PROPIEDADES DE SÍMBOLOS
// ========================================

// Los Symbols permiten crear propiedades que no colisionan con otras
const id = Symbol('id')
const type = Symbol('type')

const item = {
    name: "Example",
    [id]: 12345,
    [type]: "test"
}

// Las propiedades de Symbol no aparecen en Object.keys() o Object.entries()
console.log(Object.keys(item)) // ["name"]
console.log(Object.entries(item)) // [["name", "Example"]]

// Para obtener propiedades de Symbol:
const symbolProperties = Object.getOwnPropertySymbols(item)
console.log(symbolProperties) // [Symbol(id), Symbol(type)]

// Acceder a propiedades de Symbol:
console.log(item[id]) // 12345
console.log(item[type]) // "test"