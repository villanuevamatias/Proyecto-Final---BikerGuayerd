
// estas funcione  ocultara y mostrara en intervalos el globo por encima del icono de wsp.
     let a =setInterval(() => {
       mostrarGlobo();
        
    }, 21000);
    let b =setInterval(() => {
        ocultarGlobo();
         
     }, 6990);
function mostrarGlobo() {
    
    document.getElementById("globo").style.display="flex";
    
}
function ocultarGlobo() {
   
    document.getElementById("globo").style.display="none";
    
}
//---LOGIN---//
//---LOGIN---//
/*SALUDO*/
const saludoUs = document.querySelector('#saludoUser');
const today = new Date();
var h = today.getHours();
var m = today.getMinutes();

function saludar(){
  if (m<10) {
    m = "0" + m;
  }

  saludoUs.style.visibility = "visible";
  
  document.getElementById("timeH").innerHTML = h + ":" + m + " " + "Hs" + " " + "-";
  document.getElementById("userName").innerHTML = userS;
}
var userS
/* SALUDO*/

function store(){
  /*Recibe los datos del imput*/
  var inputUser = document.getElementById("us").value;
  var inputEmail = document.getElementById("em").value;
  var Novedades =document.getElementById("Novedades");
  // Comprobar si local esta guardado
  var correo = localStorage.getItem("Email");
  console.log(Novedades.checked);
if(inputEmail===correo){
  //saludar(); //si existe el usuario saludar
  sessionStorage.setItem("ocultarLogin", "si" );// esta variable temporaria nos servira para mostrar o los login de los demas site.
  ocultarLogin();
  if(Novedades.checked){//si el check box fue tildado mostraremos el logo flotante de hotsale.
   sessionStorage.setItem("Novedades", "si");
     mostrarhotsale();

  }

}else{ // en  caso que el usuario no este guardado en local storage 
 //asignarcupon ();// funcion que asignara cupon y desprendera un popup
 if(Novedades.checked){//si el check box fue tildado mostraremos el logo flotante de hotsale.
     mostrarhotsale();
  sessionStorage.setItem("Novedades", "si");

  }
  sessionStorage.setItem("ocultarLogin", "si" );// esta variable temporaria nos servira para mostrar o los login de los demas site.
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
function mostrarhotsale(){ 
  document.getElementById("logohotsale").style.display="flex";
}
function ocultarhotsale() {
  document.getElementById("logohotsale").style.display="none";

}

ocultarLogin();
function ocultarLogin() {
  var opcion= sessionStorage.getItem("ocultarLogin");
  console.log(opcion);
  if(opcion==="si"){
    saludar()
    document.getElementById("contenedorLogin").style.display="none";
  }
  
}
