/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
Este archivo contiene ejercicios prácticos para reforzar los conceptos de Arrays, Sets y Maps
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// Ejemplo: Procesar una lista de productos para calcular el total de productos en stock con precio > 50
const products = [
    { name: "Laptop", price: 1200, stock: 5 },
    { name: "Mouse", price: 25, stock: 50 },
    { name: "Keyboard", price: 80, stock: 15 },
    { name: "Monitor", price: 300, stock: 8 },
    { name: "USB Cable", price: 10, stock: 100 }
]

// Filtrar productos con precio mayor a 50, mapear a valor total en stock, y reducir a suma total
const totalValueExpensiveProducts = products
    .filter(product => product.price > 50) // Filtrar productos caros
    .map(product => product.price * product.stock) // Calcular valor total por producto
    .reduce((total, value) => total + value, 0) // Sumar todos los valores

console.log(`Valor total de productos caros en stock: $${totalValueExpensiveProducts}`)
// Output: Valor total de productos caros en stock: $1200*5 + 80*15 + 300*8 = $6000 + $1200 + $2400 = $9600

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const cubedEvenNumbers = numbers
    .map(num => Math.pow(num, 3)) // Elevar cada número al cubo
    .filter(cubedNum => cubedNum % 2 === 0) // Filtrar solo los números pares

console.log("Números elevados al cubo que son pares:", cubedEvenNumbers)
// Output: [8, 64, 216, 512, 1000] (2³, 4³, 6³, 8³, 10³)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
// Ejemplo: Procesar una estructura de datos anidada de categorías y productos
const categories = [
    {
        category: "Electronics",
        subcategories: [
            { name: "Phones", products: ["iPhone", "Samsung"] },
            { name: "Laptops", products: ["MacBook", "Dell"] }
        ]
    },
    {
        category: "Clothing",
        subcategories: [
            { name: "Shirts", products: ["T-Shirt", "Polo"] },
            { name: "Pants", products: ["Jeans", "Shorts"] }
        ]
    }
]

// Usar flatMap para extraer todos los productos de todas las categorías
const allProducts = categories.flatMap(category =>
    category.subcategories.flatMap(subcategory => subcategory.products)
)

console.log("Todos los productos:", allProducts)
// Output: ["iPhone", "Samsung", "MacBook", "Dell", "T-Shirt", "Polo", "Jeans", "Shorts"]

// 4. Ordena un array de números de mayor a menor
const unsortedNumbers = [45, 12, 89, 23, 56, 3, 78, 34, 67, 91]

const sortedDescending = [...unsortedNumbers].sort((a, b) => b - a)
console.log("Números ordenados de mayor a menor:", sortedDescending)
// Output: [91, 89, 78, 67, 56, 45, 34, 23, 12, 3]

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const set1 = new Set([1, 2, 3, 4, 5, 6])
const set2 = new Set([4, 5, 6, 7, 8, 9])

// Unión: todos los elementos de ambos sets sin duplicados
const union = new Set([...set1, ...set2])
console.log("Unión:", union) // Set {1, 2, 3, 4, 5, 6, 7, 8, 9}

// Intersección: elementos que están en ambos sets
const intersection = new Set([...set1].filter(element => set2.has(element)))
console.log("Intersección:", intersection) // Set {4, 5, 6}

// Diferencia: elementos que están en set1 pero no en set2
const difference = new Set([...set1].filter(element => !set2.has(element)))
console.log("Diferencia (set1 - set2):", difference) // Set {1, 2, 3}

// Diferencia simétrica: elementos que están en uno u otro pero no en ambos
const symmetricDifference = new Set([
    ...[...set1].filter(element => !set2.has(element)),
    ...[...set2].filter(element => !set1.has(element))
])
console.log("Diferencia simétrica:", symmetricDifference) // Set {1, 2, 3, 7, 8, 9}

// 6. Itera los resultados del ejercicio anterior
console.log("\nIteración de resultados:")

console.log("Unión - Elementos:")
union.forEach(element => console.log(`  ${element}`))

console.log("Intersección - Elementos:")
intersection.forEach(element => console.log(`  ${element}`))

console.log("Diferencia - Elementos:")
difference.forEach(element => console.log(`  ${element}`))

console.log("Diferencia simétrica - Elementos:")
symmetricDifference.forEach(element => console.log(`  ${element}`))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const usersMap = new Map([
    ["user1", { name: "Ana García", age: 28, email: "ana@example.com" }],
    ["user2", { name: "Carlos López", age: 35, email: "carlos@example.com" }],
    ["user3", { name: "María Rodríguez", age: 22, email: "maria@example.com" }],
    ["user4", { name: "Juan Martínez", age: 41, email: "juan@example.com" }]
])

console.log("\nInformación de usuarios:")
usersMap.forEach((userData, userId) => {
    console.log(`${userId}: ${userData.name}, ${userData.age} años, ${userData.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres
const userNames = Array.from(usersMap.values()).map(user => user.name)
console.log("\nArray de nombres de usuarios:", userNames)
// Output: ["Ana García", "Carlos López", "María Rodríguez", "Juan Martínez"]

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const adultEmailsSet = new Set(
    Array.from(usersMap.values())
        .filter(user => user.age >= 18) // Filtrar mayores de edad
        .map(user => user.email)       // Extraer emails
)

console.log("\nSet de emails de usuarios mayores de edad:", adultEmailsSet)
// Output: Set {"ana@example.com", "carlos@example.com", "maria@example.com", "juan@example.com"}

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

// Paso 1: Transformar el Map a un objeto
const usersObject = Object.fromEntries(usersMap)
console.log("\nMapa transformado a objeto:", usersObject)

// Paso 2: Transformar el objeto a un nuevo Map con email como clave
const emailToUserMap = new Map(
    Object.values(usersObject).map(user => [user.email, user])
)

console.log("\nNuevo Mapa con email como clave:")
emailToUserMap.forEach((userData, email) => {
    console.log(`${email}:`, userData)
})

// Ejemplo de uso del nuevo mapa
console.log("\nBuscando usuario por email:")
const searchEmail = "ana@example.com"
if (emailToUserMap.has(searchEmail)) {
    console.log(`Usuario encontrado:`, emailToUserMap.get(searchEmail))
}