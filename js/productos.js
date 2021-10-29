const modalContainerEfecto = document.querySelector(".modalContainer");

setTimeout(function popUp() {
  let Novedades = sessionStorage.getItem("Novedades");
  console.log(Novedades + "p");
  if (Novedades) {
    // solo saldra si el usuario quiere recibir novedades.
    console.log("popup");
    document.getElementById("wrapperModal").style.visibility = "visible";
    modalContainerEfecto.classList.add("active");
  }
}, 1000);

function closePopUp() {
  document.getElementById("wrapperModal").style.display = "none";
}

function ocultarLogin() {
  console.log("BORRAR");
  var opcion = sessionStorage.getItem("ocultarLogin");
  console.log(opcion);
  if (opcion === "si") {
    document.getElementById("contenedorLogin").style.display = "none";
  }
}
setTimeout(function ocultarLogin() {
  console.log("BORRAR");
  var opcion = sessionStorage.getItem("ocultarLogin");
  console.log(opcion);
  if (opcion === "si") {
    document.getElementById("contenedorLogin").style.display = "none";
  }
}, 0);
//---LOGIN---//
/*SALUDO*/
const saludoUs = document.querySelector("#saludoUser");
const today = new Date();
var h = today.getHours();
var m = today.getMinutes();
if (m<10){
  m = "0"+ m;
}
var horaMilitar = "" + h + m;

function saluTemp(momento){
  console.log(horaMilitar);
  document.getElementById("saludoTemporal").innerHTML = momento;
}

function saludar() {

  saludoUs.style.visibility = "visible";
  userS = localStorage.getItem("usuarios");
  document.getElementById("timeH").innerHTML =
    h + ":" + m + " " + "Hs" + " " + "-";
    console.log(horaMilitar);
    if (horaMilitar >= 1900 && horaMilitar <= 0006){
      saluTemp("Buenas noches, ");
  
    }
    else if(horaMilitar > 0006 && horaMilitar < 0612) {
      saluTemp("Buenas madrugadas, ");
  
    }
    else if (horaMilitar > 0611 && horaMilitar < 1220){
      saluTemp("Buenos días, ");
    }
    else {
      saluTemp("Buenas Tardes, ");
    }
  
  
  document.getElementById("userName").innerHTML = userS;
}
var userS;
/* SALUDO*/

function store() {
  /*Recibe los datos del imput*/
  var inputUser = document.getElementById("us").value;
  var inputEmail = document.getElementById("em").value;
  var Novedades = document.getElementById("Novedades");
  // Comprobar si local esta guardado
  var correo = localStorage.getItem("Email");
  console.log(Novedades.checked);
  if (inputEmail === correo) {
    //saludar(); //si existe el usuario saludar
    sessionStorage.setItem("ocultarLogin", "si"); // esta variable temporaria nos servira para mostrar o los login de los demas site.
    ocultarLogin();
    if (Novedades.checked) {
      //si el check box fue tildado mostraremos el logo flotante de hotsale.
      sessionStorage.setItem("Novedades", "si");
      mostrarhotsale();
    }
  } else {
    // en  caso que el usuario no este guardado en local storage
    //asignarcupon ();// funcion que asignara cupon y desprendera un popup
    if (Novedades.checked) {
      //si el check box fue tildado mostraremos el logo flotante de hotsale.
      mostrarhotsale();
      sessionStorage.setItem("Novedades", "si");
    }
    sessionStorage.setItem("ocultarLogin", "si"); // esta variable temporaria nos servira para mostrar o los login de los demas site.
    ocultarLogin();

    /*Almacena los datos en el LocalStorage*/
    localStorage.setItem("usuarios", inputUser);
    localStorage.setItem("Email", inputEmail);

    // console.log(inputUser.value);
    // console.log(inputEmail.value);
    /*Limpia los campos de los imputs*/

    // document.getElementById("us").value="";
    // document.getElementById("em").value="";
  }
}
function mostrarhotsale() {
  document.getElementById("logohotsale").style.display = "flex";
}
function ocultarhotsale() {
  document.getElementById("logohotsale").style.display = "none";
}

ocultarLogin();
function ocultarLogin() {
  var opcion = sessionStorage.getItem("ocultarLogin");
  console.log(opcion);
  if (opcion === "si") {
    saludar();
    document.getElementById("contenedorLogin").style.display = "none";
  }
}
