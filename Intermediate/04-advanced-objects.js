// Objetos avanzados

// -Prototipos y Herencia esto ya no se usa por que ahora existen objetos

// Prototipos
 

let person ={
    name: "Jonathan",
    age: 27
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge= function(){
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()
console.log(person)

// Herencia 

let programador = Object.create(person)
programador.language = "Javascript"
console.log(programador.language)
programador.name = "Antonio"
console.log(programador.name)
console.log(programador)
programador.sayAge()

//Metodos estaticos y de instancia esto ya no se usa por que ahora existen objetos

function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.saludo = function(){ // sin prototype no funcionaria
    console.log(`Holaa soy ${this.name}`)
}

let new_Person = new Person("Jona",16)
new_Person.saludo()

// - Metodos avanzados

// assign
let person_core = {name: "Jonathan"}
let person_details = {age:27 , alias :"Mot0rhead"}

let fullPerson = Object.assign(person_core,person_details)
    console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))