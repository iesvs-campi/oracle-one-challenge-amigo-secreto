let amigos = [];
//Declarar todas las variables que usan el DOM aquí afuera?

function agregarAmigo() {
    let input = document.querySelector('#amigo');
    
    if(input.value ==false){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(input.value);
        input.value = "";
        mostrarAmigos();
    }
    console.log(amigos);
}

function mostrarAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML =""; //Vaciar ul, ya que se reconstuirá por completo con el for

    for(let i = 0; i<amigos.length; i++){
        //Crear una varibale para meterle todo esto? Fuera del for haŕia un listaHTML.innerHTML = variable;
        listaHTML.innerHTML += `<li> ${amigos[i]} </li>`;

    }
    return;



}

function sortearAmigo() {
    let resultado = document.querySelector('#resultado');
    let indexGanador = Math.floor(Math.random()*amigos.length); //Necesita el 1? Creo que no, porque el arreglo hay que recorrerlo desde el 0 hasta length -1
    console.log(indexGanador);

    resultado.innerHTML=amigos[indexGanador];


}
