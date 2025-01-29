// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    if (nombreAmigo.value === '') {
        alert('Debe ingresar un nombre');
        return;
    } else {
        amigos.push(nombreAmigo.value);
        nombreAmigo.value = '';
        mostrarAmigos();
        console.log(amigos);
        return;
    };
        
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    };
}