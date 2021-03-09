// variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");


//Funciones
const guardarNombre = () => {
   let nombre = prompt("Ingrese su nombre");
   console.log("nombre")
   if (nombre === "") {
       alert("Favor escribir su nombre antes de aceptar");
   } else {
    hNombre.innerHTML = "Hola: " + nombre;
}
   }
   

//Onlclicks
btnNombre.onclick = function () {
    guardarNombre();
}