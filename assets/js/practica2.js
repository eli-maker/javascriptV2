// variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");


//Funciones
const guardarNombre = () => {
   let nombre = prompt("Ingrese su nombre");
   hNombre.innerHTML = "Hola: " + nombre;
}

//Onlclicks
btnNombre.onclick = function () {
    guardarNombre();
}