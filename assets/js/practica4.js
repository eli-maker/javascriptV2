// variables
let infoBtn = document.getElementById("infoBtn");
let btnNamee = document.getElementById("btnName");
let btnAge = document.getElementById("btnAge");
let btnId = document.getElementById("btnId");
let btnPhone = document.getElementById("btnPhone");

// Funciones
const saveName = () => {
  let nombre = prompt("Ingrese su nombre");
  let edad = prompt("Ingrese su edad");
  let identidad = prompt("Ingrese su documento");
  let telefono = prompt("Ingrese su numero de telefono");

  /*  console.log("nombre"); */
  if (nombre === "") {
    alert("Favor escribir su nombre antes de aceptar");
  } else if (edad === "") {
    alert("Favor escribir su edad antes de aceptar");
  } else if (identidad === "") {
    alert("Favor escribir su identidad antes de aceptar");
  } else if (telefono === "") {
      alert("Favor escribir telefono antes de aceptar");
  } else {
    btnNamee.innerHTML = "Nombre: " + nombre;
    btnAge.innerHTML = "Edad: " + edad;
    btnId.innerHTML = "Documento: " + identidad;
    btnPhone.innerHTML = "Telefono: " + telefono;
  }
};

//Onclicks
infoBtn.onclick = function () {
  saveName();
};
