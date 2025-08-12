let amigos = [];
//Variables con objetos HTML 
let listaHTML = document.querySelector('#listaAmigos');
let inputAmigos = document.querySelector('#amigo');
let resultado = document.querySelector('#resultado');

function agregarAmigo() {
    let nombre = inputAmigos.value.trim(); //el trim() se usar para borrar los espacios en blanco al comienzo y al findel del string 

    if(nombre === ''){
        alert('Por favor, inserte un nombre');
        return;
    }

    if(amigoRepetido(nombre) === 'agregar'){
        amigos.push(nombre); //agregar nombre al array
        inputAmigos.value = ""; //Vaciar input
        mostrarAmigos(); //Actualizar elemento ul
    }

    return;
}

function amigoRepetido(amigo) {
    let agregarRepetido;
    let veces = 0;

    for (let i = 0; i < amigos.length; i++) {
        if(amigos[i]===amigo){
            veces++;
        }
    }
        
    if(veces === 0){
        return 'agregar';
    } else { //Creo que este else no hace falta
        agregarRepetido = confirm(`Ya ingregó ese nombre ${veces} ${veces > 1 ? 'veces' : 'vez'} ¿Quieres continuar?`); 
        return agregarRepetido === true ? 'agregar' : 'ignorar';
    }
}

function mostrarAmigos() {
    let contenidoLista = '';

    for(let i = 0; i<amigos.length; i++){
        contenidoLista+= `<li> ${amigos[i]} </li>`;
    }
    listaHTML.innerHTML=contenidoLista; //No hace falta vaciar el elemento. Con esta variable reemplazamos el contenido.
    return;
}

function sortearAmigo() {
    let indexGanador = Math.floor(Math.random()*amigos.length); //No hace falta sumar 1. Los valores se guardan desde la posición 0

    if(amigos.length > 0) {
        resultado.innerHTML=`Tu amigo secreto es ${amigos[indexGanador]}`;
    }else {
        resultado.innerHTML='↑ Ingrese los Nombres a sortear ↑';
    }

}
