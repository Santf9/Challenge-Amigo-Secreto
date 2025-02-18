// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Primer paso del desafío. Crear un array para almacenar los nombres de amigos
let arrayAmigos = []

//Capturando el valor del campo de entrada del usuario
let input = document.getElementById('amigo')

//Función y validación del campo de entrada y actualización del arrayAmigos
function agregarAmigo() {

    if (!input.value) {
        alert("Porfavor, inserte un nombre")
    } else if (arrayAmigos.includes(input.value)) {
        alert(`El nombre ${input.value} ya se encuentra en la lista`)

    } else {
        arrayAmigos.push(input.value)
        console.log(arrayAmigos)
    }
    actualizarListaAmigos()
}

//Funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ''

    for (let i = 0; i < arrayAmigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = arrayAmigos[i]
        listaAmigos.appendChild(li)
    }
}

//funcion para sortear amigo aleatorio

