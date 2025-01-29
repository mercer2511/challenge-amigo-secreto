// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se creo el array amigos para almacenar los nombres de los amigos
let amigos = []

//Se creo la funcion agregarAmigo para agregar los nombres de los amigos al array amigos
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

//Se creo la funcion mostrarAmigos para mostrar los nombres de los amigos en la lista
function mostrarAmigos() {    
    let lista = document.getElementById('listaAmigos');    
    lista.innerHTML = '';    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    };
    }

//Se creo la funcion sortearAmigo para sortear un amigo de la lista de amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Deben haber al menos dos amigos para sortear');
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
        return;
        }
    };