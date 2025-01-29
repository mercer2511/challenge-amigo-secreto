// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo')
    if (nombreAmigo.value === '') {
        alert('Debe ingresar un nombre')
        return
    } else {
        amigos.push(nombreAmigo.value)
    }
    console.log(amigos)    
}