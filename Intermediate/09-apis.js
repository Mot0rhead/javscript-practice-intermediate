// Manejo de APIs

// API - REST ( HTTP + URLS + JSON )

// Métodos HTTP
// - GET  ( recibir datos )
// - POST ( enviar datos )
// - PUT  ( habitualmente sirve para enviar datos y actualizar un recursos)
// - PATCH
// - DELETE

// Códigos de respuesta HTTP:
// - 200 OK
// - 201 ha ido bien y he creado el recurso que me has enviado
// - 400 Error 
// - 404 no encontrado
// - 500 error del servidor

// Consumir una API

// GET
fetch('https://jsonplaceholder.typicode.com/posts')
.then( response =>{ 
return response.json() // coges la informacion que te devuelve el fecth y lo transformas a json
})
.then(data =>{
    console.log(data) // imprimes la informacion transformada en json
})
.catch(error =>{
    console.log(error)
})
// esta es la forma clasica y un poco "desactualizada"

// Uso de Async/Await

async function getPosts(){

    try{
 const response = await fetch("https://jsonplaceholder.typicode.com/posts")

 const data = await response.json()

 console.log(data)
    } catch (error) {
         console.log(error)
    }
}
getPosts()

// Solicitud POST

async function createPost(){

    try{
        
        const newPost = {
            userId: 1,
            title: "Titulo de mi post",
            body: "El cuerpo de mi post",
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost) // transforma mi objeto a JSON
        })

        const data = await response.json()

        console.log(data)

    } catch (error) {

         console.log(error)

    }
}
createPost()

// Manejo de errores

fetch ("https://jsonplaceholder.typicode.com/posts")
.then(response  => {
    if (!response.ok){
        throw Error("Status HTTP "+response.status)
       
    }else{
       return response.json()
    }
})

// Metodos HTTP adicionales
// - PATCH ( actualiza parcialmente un recursos)
// - OPTIONS ( consulta que metodos HTTP son validos para un recurso)

async function partialPostUpdate(){

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10",{ // se le añade el /10 para hacer referencia al id 10
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({title: "Nuevo titulo de mi post"}) // lo que se va a updatear solamente ( por eso es update parcial )
        })

        const data = await response.json()

        console.log(data)

    } catch (error) {

         console.log(error)

    }
}
partialPostUpdate()

// Autenticacion mediante API Key
