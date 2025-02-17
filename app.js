// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Primer paso del desafío. Crear un array para almacenar los nombres de amigos
let arrayAmigos = []

//Capturando el valor del campo de entrada del usuario
let input = document.getElementById('amigo')

let listaAmigosUl = document.getElementById('listaAmigos')

//Validación del campo de entrada y actualización del arrayAmigos
function agregarAmigo() {
    if (!input.value) {
        alert("Porfavor, inserte un nombre")
    } else {
        arrayAmigos.push(input.value)
        listaAmigosUl.innerHTML += `<li>${input.value}</li>` 
    }
    limpiarInput()
}

//Función para limpiar el campo de entrada una vez añadido los nombres
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

