/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
Este archivo contiene ejercicios prácticos para reforzar conceptos avanzados de objetos y clases
*/

// ========================================
// EJERCICIO 1: Agregar una función al prototipo de un objeto
// ========================================

// Creamos una función constructora (estilo pre-ES6)
function Vehicle(brand, model) {
    this.brand = brand
    this.model = model
    this.speed = 0
}

// Agregamos un método al prototipo (compartido por todas las instancias)
Vehicle.prototype.accelerate = function(increment) {
    this.speed += increment
    console.log(`${this.brand} ${this.model} acelerando a ${this.speed} km/h`)
}

Vehicle.prototype.brake = function(decrement) {
    this.speed = Math.max(0, this.speed - decrement)
    console.log(`${this.brand} ${this.model} frenando a ${this.speed} km/h`)
}

// Agregamos un método que obtiene información completa
Vehicle.prototype.getInfo = function() {
    return `${this.brand} ${this.model} - Velocidad actual: ${this.speed} km/h`
}

// Creamos instancias para probar los métodos del prototipo
const car1 = new Vehicle("Toyota", "Corolla")
const car2 = new Vehicle("Honda", "Civic")

car1.accelerate(50)
car2.accelerate(60)
car1.brake(20)

console.log(car1.getInfo())
console.log(car2.getInfo())

// ========================================
// EJERCICIO 2: Crear un objeto que herede de otro
// ========================================

// Objeto base
const animal = {
    type: "animal",
    sound: "",
    
    makeSound() {
        if (this.sound) {
            console.log(`${this.type} hace: ${this.sound}`)
        } else {
            console.log(`${this.type} no hace sonido`)
        }
    },
    
    eat() {
        console.log(`${this.type} está comiendo`)
    }
}

// Creamos un objeto que hereda de animal usando Object.create
const dog = Object.create(animal)
dog.type = "perro"
dog.sound = "guau"
dog.breed = "Labrador"

// Agregamos un método específico para perros
dog.wagTail = function() {
    console.log(`${this.type} está moviendo la cola`)
}

// El objeto dog hereda los métodos de animal
console.log("\n--- Herencia con Object.create ---")
dog.makeSound() // Método heredado
dog.eat()       // Método heredado
dog.wagTail()   // Método propio

// Verificamos la cadena de prototipos
console.log("¿dog hereda de animal?", dog.__proto__ === animal) // true

// ========================================
// EJERCICIO 3: Definir un método de instancia en un objeto
// ========================================

// Usamos una clase moderna (ES6) para mayor claridad
class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.currentPage = 0
        this.isRead = false
    }
    
    // Método de instancia: opera sobre datos de la instancia específica
    read(pagesToRead) {
        const remainingPages = this.pages - this.currentPage
        
        if (this.isRead) {
            console.log(`Ya has terminado de leer "${this.title}"`)
            return
        }
        
        if (pagesToRead >= remainingPages) {
            this.currentPage = this.pages
            this.isRead = true
            console.log(`¡Felicidades! Has terminado de leer "${this.title}"`)
        } else {
            this.currentPage += pagesToRead
            console.log(`Has leído ${pagesToRead} páginas de "${this.title}". Vas por la página ${this.currentPage}`)
        }
    }
    
    // Otro método de instancia
    getProgress() {
        const progress = (this.currentPage / this.pages * 100).toFixed(1)
        return `"${this.title}" - Progreso: ${progress}% (${this.currentPage}/${this.pages} páginas)`
    }
    
    // Método de instancia que modifica el estado
    bookmark(page) {
        if (page < 0 || page > this.pages) {
            console.log("Número de página inválido")
            return
        }
        this.currentPage = page
        console.log(`Marcador guardado en la página ${page} de "${this.title}"`)
    }
}

// Creamos una instancia y usamos sus métodos de instancia
const book1 = new Book("El Quijote", "Miguel de Cervantes", 1072)
const book2 = new Book("1984", "George Orwell", 328)

console.log("\n--- Métodos de instancia ---")
book1.read(50)
console.log(book1.getProgress())
book1.bookmark(100)
book1.read(1000) // Terminará el libro

book2.read(100)
console.log(book2.getProgress())

// ========================================
// EJERCICIO 4: Usar get y set en un objeto
// ========================================

class Rectangle {
    constructor(width, height) {
        this._width = width  // Usamos _width para evitar recursión con el setter
        this._height = height
    }
    
    // Getter para width: permite acceder como si fuera una propiedad normal
    get width() {
        return this._width
    }
    
    // Setter para width: permite validar y procesar el valor asignado
    set width(newWidth) {
        if (typeof newWidth !== 'number' || newWidth <= 0) {
            console.log("Error: el ancho debe ser un número positivo")
            return
        }
        this._width = newWidth
        console.log(`Ancho actualizado a: ${newWidth}`)
    }
    
    // Getter y setter para height
    get height() {
        return this._height
    }
    
    set height(newHeight) {
        if (typeof newHeight !== 'number' || newHeight <= 0) {
            console.log("Error: el alto debe ser un número positivo")
            return
        }
        this._height = newHeight
        console.log(`Alto actualizado a: ${newHeight}`)
    }
    
    // Getter computado: no tiene propiedad de almacenamiento correspondiente
    get area() {
        return this._width * this._height
    }
    
    // Getter computado para el perímetro
    get perimeter() {
        return 2 * (this._width + this._height)
    }
    
    // Getter que retorna información formateada
    get dimensions() {
        return `Rectángulo: ${this._width} x ${this._height} (Área: ${this.area}, Perímetro: ${this.perimeter})`
    }
}

console.log("\n--- Getters y Setters ---")
const rect = new Rectangle(10, 5)

// Usamos los getters (se acceden como propiedades, no como métodos)
console.log(`Ancho: ${rect.width}`)  // Usa el getter
console.log(`Alto: ${rect.height}`)  // Usa el getter
console.log(`Área: ${rect.area}`)   // Usa el getter computado
console.log(rect.dimensions)       // Usa el getter formateado

// Usamos los setters (se asignan como propiedades, no como métodos)
rect.width = 15  // Usa el setter con validación
rect.height = 8  // Usa el setter con validación

// Intento de asignación inválida
rect.width = -5  // Rechazado por el setter
rect.height = "texto"  // Rechazado por el setter

console.log(rect.dimensions)

// ========================================
// EJERCICIO 5: Utilizar Object.assign en un objeto
// ========================================

console.log("\n--- Object.assign ---")

// Ejemplo 1: Combinar objetos
const person = {
    name: "Ana",
    age: 30,
    city: "Madrid"
}

const job = {
    position: "Developer",
    company: "TechCorp",
    salary: 50000
}

const hobbies = {
    hobbies: ["lectura", "senderismo", "fotografía"]
}

// Combinamos todos los objetos en uno solo
const fullProfile = Object.assign({}, person, job, hobbies)
console.log("Perfil completo:", fullProfile)

// Ejemplo 2: Crear copias de objetos
const original = { a: 1, b: 2, c: 3 }
const shallowCopy = Object.assign({}, original)
console.log("Copia superficial:", shallowCopy)

// Ejemplo 3: Añadir propiedades a un objeto existente
const car = { brand: "Ford", model: "Mustang" }
Object.assign(car, { 
    year: 2023, 
    color: "red", 
    engine: "V8",
    features: ["air conditioning", "GPS", "Bluetooth"]
})
console.log("Coche con propiedades añadidas:", car)

// Ejemplo 4: Usar Object.assign con valores por defecto
function createUserWithDefaults(userData) {
    const defaults = {
        name: "Usuario",
        email: "sin@email.com",
        role: "user",
        isActive: true,
        lastLogin: new Date()
    }
    
    // Los valores de userData sobrescriben los defaults
    return Object.assign({}, defaults, userData)
}

const user1 = createUserWithDefaults({ name: "Carlos", email: "carlos@example.com" })
const user2 = createUserWithDefaults({ name: "María", role: "admin" })

console.log("Usuario 1:", user1)
console.log("Usuario 2:", user2)

// ========================================
// EJERCICIO 6: Crear una clase abstracta
// ========================================

console.log("\n--- Clase Abstracta ---")

// Simulamos una clase abstracta (JavaScript no tiene clases abstractas nativas)
class Shape {
    constructor(name) {
        // Evitamos la instanciación directa
        if (new.target === Shape) {
            throw new Error("Shape es una clase abstracta y no puede ser instanciada directamente")
        }
        this.name = name
        this.color = "black"
    }
    
    // Método concreto (implementado en la clase base)
    setColor(color) {
        this.color = color
        console.log(`${this.name} ahora es ${color}`)
    }
    
    // Método abstracto (debe ser implementado por las subclases)
    calculateArea() {
        throw new Error("El método calculateArea debe ser implementado por la subclase")
    }
    
    // Otro método abstracto
    calculatePerimeter() {
        throw new Error("El método calculatePerimeter debe ser implementado por la subclase")
    }
    
    // Método concreto que usa métodos abstractos (Template Method Pattern)
    getDescription() {
        const area = this.calculateArea()
        const perimeter = this.calculatePerimeter()
        return `${this.name} - Color: ${this.color}, Área: ${area}, Perímetro: ${perimeter}`
    }
}

// Subclase que implementa correctamente la clase abstracta
class Circle extends Shape {
    constructor(radius) {
        super("Círculo")
        this.radius = radius
    }
    
    // Implementación obligatoria del método abstracto
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    
    // Implementación obligatoria del método abstracto
    calculatePerimeter() {
        return 2 * Math.PI * this.radius
    }
    
    // Método adicional específico del círculo
    calculateDiameter() {
        return 2 * this.radius
    }
}

// Subclase que implementa correctamente la clase abstracta
class Rectangle2 extends Shape {
    constructor(width, height) {
        super("Rectángulo")
        this.width = width
        this.height = height
    }
    
    calculateArea() {
        return this.width * this.height
    }
    
    calculatePerimeter() {
        return 2 * (this.width + this.height)
    }
}

// Intento de instanciar la clase abstracta (fallará)
try {
    const abstractShape = new Shape("Forma")
} catch (error) {
    console.log("Error esperado:", error.message)
}

// Creamos instancias de las subclases concretas
const circle = new Circle(5)
const rectangle = new Rectangle2(4, 6)

circle.setColor("azul")
rectangle.setColor("verde")

console.log(circle.getDescription())
console.log(rectangle.getDescription())

// ========================================
// EJERCICIO 7: Utilizar polimorfismo en dos clases diferentes
// ========================================

console.log("\n--- Polimorfismo ---")

// Clase base
class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    
    // Método que será sobrescrito (polimorfismo)
    calculateBonus() {
        return this.salary * 0.1 // Bono del 10% por defecto
    }
    
    // Método que usa el método polimórfico
    getTotalCompensation() {
        const bonus = this.calculateBonus()
        return this.salary + bonus
    }
    
    // Método que será sobrescrito
    work() {
        console.log(`${this.name} está trabajando`)
    }
}

// Subclase con su propia implementación
class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary)
        this.teamSize = teamSize
    }
    
    // Sobrescritura del método (polimorfismo)
    calculateBonus() {
        return this.salary * 0.2 + (this.teamSize * 100) // Bono del 20% + $100 por miembro del equipo
    }
    
    // Sobrescritura del método work
    work() {
        console.log(`${this.name} está gestionando un equipo de ${this.teamSize} personas`)
    }
}

// Otra subclase con implementación diferente
class Developer extends Employee {
    constructor(name, salary, programmingLanguages) {
        super(name, salary)
        this.programmingLanguages = programmingLanguages
    }
    
    // Sobrescritura del método (polimorfismo)
    calculateBonus() {
        const languageBonus = this.programmingLanguages.length * 200
        return this.salary * 0.15 + languageBonus // Bono del 15% + $200 por lenguaje
    }
    
    // Sobrescritura del método work
    work() {
        console.log(`${this.name} está programando en ${this.programmingLanguages.join(", ")}`)
    }
}

// Creamos instancias de diferentes tipos
const employees = [
    new Employee("Juan Pérez", 30000),
    new Manager("Ana García", 60000, 5),
    new Developer("Carlos López", 45000, ["JavaScript", "Python", "Java"])
]

// Demostración de polimorfismo: mismo método, diferentes comportamientos
console.log("Demostración de polimorfismo:")
employees.forEach(employee => {
    employee.work() // Comportamiento diferente según el tipo
    const bonus = employee.calculateBonus() // Cálculo diferente según el tipo
    const total = employee.getTotalCompensation()
    console.log(`Bono: $${bonus.toFixed(2)}, Compensación total: $${total.toFixed(2)}`)
    console.log("---")
})

// ========================================
// EJERCICIO 8: Implementar un Mixin
// ========================================

console.log("\n--- Mixins ---")

// Mixin para añadir capacidades de vuelo
const Flyable = {
    fly() {
        console.log(`${this.name} está volando a ${this.altitude} metros de altura`)
    },
    
    land() {
        console.log(`${this.name} ha aterrizado`)
    },
    
    setAltitude(altitude) {
        this.altitude = altitude
        console.log(`${this.name} ajustando altitud a ${altitude} metros`)
    }
}

// Mixin para añadir capacidades de natación
const Swimmable = {
    swim(depth) {
        console.log(`${this.name} está nadando a ${depth} metros de profundidad`)
    },
    
    surface() {
        console.log(`${this.name} está saliendo a la superficie`)
    }
}

// Mixin para añadir capacidades de salto
const Jumpable = {
    jump(height) {
        console.log(`${this.name} está saltando a ${height} metros de altura`)
    }
}

// Clase base
class Animal2 {
    constructor(name, species) {
        this.name = name
        this.species = species
    }
    
    makeSound(sound) {
        console.log(`${this.name} (${this.species}) hace: ${sound}`)
    }
}

// Clase que usa un mixin
class Bird extends Animal2 {
    constructor(name, wingspan) {
        super(name, "ave")
        this.wingspan = wingspan
        this.altitude = 0
    }
}

// Aplicamos el mixin Flyable a Bird
Object.assign(Bird.prototype, Flyable)

// Clase que usa múltiples mixins
class Duck extends Animal2 {
    constructor(name) {
        super(name, "pato")
        this.altitude = 0
    }
}

// Aplicamos múltiples mixins a Duck
Object.assign(Duck.prototype, Flyable, Swimmable)

// Clase que usa el mixin de salto
class Frog extends Animal2 {
    constructor(name) {
        super(name, "rana")
    }
}

// Aplicamos el mixin Jumpable a Frog
Object.assign(Frog.prototype, Jumpable)

// Creamos instancias y probamos los mixins
const eagle = new Bird("Águila", 2.5)
const duck = new Duck("Pato Lucas")
const frog = new Frog("Rana René")

console.log("Probando el águila (solo puede volar):")
eagle.makeSound("¡Shriik!")
eagle.setAltitude(1000)
eagle.fly()
eagle.land()

console.log("\nProbando el pato (puede volar y nadar):")
duck.makeSound("¡Cuack!")
duck.setAltitude(50)
duck.fly()
duck.swim(2)
duck.surface()
duck.land()

console.log("\nProbando la rana (solo puede saltar):")
frog.makeSound("¡Croak!")
frog.jump(0.5)

// ========================================
// EJERCICIO 9: Crear un Singleton
// ========================================

console.log("\n--- Patrón Singleton ---")

// Implementación clásica de Singleton
class DatabaseConnection {
    // Propiedad estática para almacenar la única instancia
    static instance = null
    
    constructor(connectionString) {
        // Si ya existe una instancia, retornarla
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance
        }
        
        // Si no existe, crear la nueva instancia
        this.connectionString = connectionString
        this.isConnected = false
        this.queryCount = 0
        
        // Guardar la instancia
        DatabaseConnection.instance = this
        console.log("Nueva conexión a base de datos creada")
    }
    
    // Método estático para obtener la instancia (forma recomendada)
    static getInstance(connectionString) {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection(connectionString)
        }
        return DatabaseConnection.instance
    }
    
    connect() {
        if (!this.isConnected) {
            console.log(`Conectando a: ${this.connectionString}`)
            this.isConnected = true
        } else {
            console.log("Ya está conectado a la base de datos")
        }
    }
    
    disconnect() {
        if (this.isConnected) {
            console.log("Desconectando de la base de datos")
            this.isConnected = false
        }
    }
    
    query(sql) {
        if (!this.isConnected) {
            console.log("Error: no hay conexión activa")
            return null
        }
        
        this.queryCount++
        console.log(`Ejecutando query #${this.queryCount}: ${sql}`)
        return `Resultado del query ${this.queryCount}`
    }
    
    // Método para resetear el singleton (útil para pruebas)
    static reset() {
        DatabaseConnection.instance = null
    }
}

// Demostración del Singleton
console.log("Creando conexiones (deberían ser la misma instancia):")
const db1 = DatabaseConnection.getInstance("mysql://localhost:3306/myapp")
const db2 = DatabaseConnection.getInstance("postgresql://localhost:5432/myapp")
const db3 = new DatabaseConnection("sqlite://myapp.db") // También retorna la misma instancia

console.log("¿Son la misma instancia?", db1 === db2 && db2 === db3) // true

db1.connect()
db2.query("SELECT * FROM users")
db3.query("SELECT COUNT(*) FROM products")

// Reset para demostrar creación de nueva instancia
DatabaseConnection.reset()
const db4 = DatabaseConnection.getInstance("mongodb://localhost:27017/myapp")
console.log("¿Es una nueva instancia después del reset?", db4 === db1) // false

// ========================================
// EJERCICIO 10: Desarrollar un Proxy
// ========================================

console.log("\n--- Proxy Avanzado ---")

// Creamos un handler para el proxy con múltiples interceptores
const smartObjectHandler = {
    // Intercepta la lectura de propiedades
    get(target, property) {
        console.log(`🔍 Leyendo propiedad: ${property}`)
        
        // Si la propiedad no existe, ofrecemos sugerencias
        if (!(property in target)) {
            const suggestions = Object.keys(target).filter(key => 
                key.toLowerCase().includes(property.toLowerCase())
            )
            
            if (suggestions.length > 0) {
                console.log(`💡 Propiedad '${property}' no encontrada. ¿Quisiste decir: ${suggestions.join(", ")}?`)
            } else {
                console.log(`❌ La propiedad '${property}' no existe en este objeto`)
            }
            return undefined
        }
        
        // Si la propiedad es una función, la vinculamos al target
        if (typeof target[property] === 'function') {
            return target[property].bind(target)
        }
        
        return target[property]
    },
    
    // Intercepta la escritura de propiedades
    set(target, property, value) {
        console.log(`✏️ Escribiendo ${property}: ${value}`)
        
        // Validación para diferentes tipos de propiedades
        if (property === 'email' && typeof value === 'string') {
            if (!value.includes('@')) {
                console.log("❌ Email inválido - debe contener '@'")
                return false
            }
        }
        
        if (property === 'age' && typeof value === 'number') {
            if (value < 0 || value > 150) {
                console.log("❌ Edad inválida - debe estar entre 0 y 150")
                return false
            }
        }
        
        if (property === 'password') {
            console.log("🔒 Estableciendo contraseña (oculta para seguridad)")
            // No mostramos el valor de la contraseña en la consola
        }
        
        target[property] = value
        console.log(`✅ Propiedad '${property}' establecida correctamente`)
        return true
    },
    
    // Intercepta la verificación de existencia de propiedades
    has(target, property) {
        console.log(`🔎 Verificando existencia de: ${property}`)
        return property in target
    },
    
    // Intercepta la eliminación de propiedades
    deleteProperty(target, property) {
        console.log(`🗑️ Intentando eliminar: ${property}`)
        
        // Propiedades protegidas que no se pueden eliminar
        const protectedProps = ['id', 'name', 'email']
        if (protectedProps.includes(property)) {
            console.log(`❌ No se puede eliminar la propiedad protegida: ${property}`)
            return false
        }
        
        delete target[property]
        console.log(`✅ Propiedad '${property}' eliminada`)
        return true
    },
    
    // Intercepta la enumeración de propiedades
    ownKeys(target) {
        console.log("📋 Enumerando propiedades del objeto")
        return Object.keys(target)
    }
}

// Clase que usaremos con el proxy
class UserProfile {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
        this.age = 0
        this.password = ""
        this.createdAt = new Date()
    }
    
    // Método de instancia
    updateProfile(updates) {
        console.log("🔄 Actualizando perfil...")
        Object.assign(this, updates)
        console.log("✅ Perfil actualizado")
    }
    
    // Método de instancia
    getPublicInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            age: this.age,
            memberSince: this.createdAt
        }
    }
}

// Creamos una instancia y la envolvemos con el proxy
const userProfile = new Proxy(new UserProfile(1, "John Doe", "john@example.com"), smartObjectHandler)

// Demostración del proxy en acción
console.log("--- Probando el proxy ---")

// Lectura de propiedades
console.log(userProfile.name)    // Interceptado
console.log(userProfile.email)   // Interceptado
console.log(userProfile.nonexistent) // No existe, con sugerencias

// Escritura de propiedades
userProfile.age = 30             // Válido
userProfile.age = -5             // Inválido
userProfile.email = "new@email.com" // Válido
userProfile.email = "invalid-email"  // Inválido
userProfile.password = "secret123"   // Oculto

// Uso de métodos
userProfile.updateProfile({ age: 25, city: "New York" })
const publicInfo = userProfile.getPublicInfo()
console.log("Información pública:", publicInfo)

// Verificación de propiedades
console.log("name" in userProfile)    // Interceptado
console.log("password" in userProfile) // Interceptado

// Eliminación de propiedades
delete userProfile.age          // Permitido
delete userProfile.id            // Rechazado (protegida)

// Enumeración de propiedades
console.log(Object.keys(userProfile)) // Interceptado

// Proxy con validación de arrays
const arrayHandler = {
    get(target, property) {
        if (property === 'push') {
            return function(...items) {
                console.log(`📝 Añadiendo ${items.length} elementos al array`)
                // Validación antes de añadir
                items.forEach(item => {
                    if (typeof item !== 'number') {
                        console.log(`⚠️ Advertencia: elemento no numérico (${typeof item})`)
                    }
                })
                return target.push(...items)
            }
        }
        return target[property]
    }
}

const numbersArray = new Proxy([1, 2, 3], arrayHandler)
numbersArray.push(4, 5, 6)       // Interceptado
numbersArray.push(7, "ocho", 9)  // Con advertencia

console.log("Array final:", numbersArray)