/*const contenedor = document.querySelectorAll(".contenedor");
const h2 = document.querySelectorAll(".h2");

h2.forEach((cadaH2, i) => {
  h2[i].addEventListener("click", () => {
    contenedor.forEach((cadaContenedor, i) => {
      contenedor[i].classList.remove("activo");
    });

    contenedor[i].classList.add("activo");
  });
});
*/
var coll = document.getElementsByClassName("colapsable");
// console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//---LOGIN---//


/*SALUDO*/
const saludoUs = document.querySelector('#saludoUser');
const today = new Date();
var h = today.getHours();
var m = today.getMinutes();
if (m<10) {
  m = "0" + m;
}
var horaMilitar = "" + h + m;

function saluTemp(momento){
  document.getElementById("saludoTemporal").innerHTML = momento;
  console.log(horaMilitar);
}

function saludar(){


  saludoUs.style.visibility = "visible";
  userS = localStorage.getItem("usuarios"); 
  document.getElementById("timeH").innerHTML = h + ":" + m + " " + "Hs" + " " + "-";
  if (horaMilitar >= 1220 && horaMilitar < 1900){
    saluTemp("Buenas tardes, ");

  }
  else if(horaMilitar > 0006 && horaMilitar < 0612) {
    saluTemp("Buenas madrugadas, ");

  }
  else if (horaMilitar > 0611 && horaMilitar < 1220){
    saluTemp("Buenos días, ");
  }
  else {
    saluTemp("Buenas Noches, ");
  }
  document.getElementById("userName").innerHTML = userS;
}
var userS
/* SALUDO*/

function store(){
  /*Recibe los datos del imput*/
  var inputUser = document.getElementById("us").value;
  var inputEmail = document.getElementById("em").value;
  var Novedades =document.getElementById("Novedades");
      /*Almacena los datos en el LocalStorage*/
      localStorage.setItem("usuarios", inputUser);
  
  // Comprobar si local esta guardado
  userS = localStorage.getItem("usuarios");
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
 asignarcupon ();// funcion que asignara cupon y desprendera un popup
 if(Novedades.checked){//si el check box fue tildado mostraremos el logo flotante de hotsale.
     mostrarhotsale();
  sessionStorage.setItem("Novedades", "si");

  }
  sessionStorage.setItem("ocultarLogin", "si" );// esta variable temporaria nos servira para mostrar o los login de los demas site.
  ocultarLogin();
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
    saludar();
    document.getElementById("contenedorLogin").style.display="none";
  }
  
}

//--FIN-LOGIN-//
// ASIGNACION DESCUENTO
function asignarcupon (){
  let random=parseInt(Math.random()*5+1)
  textoDescuento="";
  switch(random){
    case 1:
      textoDescuento="Te has ganado el cupon 5HOTSALE para obtener un 5% de descuento";
 
      break;
    case 2:
      textoDescuento="Te has ganado el cupon 10HOTSALE para obtener un 10% de descuento";
 
      break;
    case 3:
      textoDescuento="Te has ganado el cupon 15HOTSALE para obtener un 15% de descuento";

      break;
    case 4:
      textoDescuento="Te has ganado el cupon 20HOTSALE para obtener un 20% de descuento";
 
      break;
    case 5:
      textoDescuento="Te has ganado el cupon 25HOTSALE para obtener un 25% de descuento";

        
       break;
                

    }
    document.getElementById("textoDescuento").innerHTML= textoDescuento;
    onView();
  }
  // fin de funcion bono
  //
  //
  //
//--CODE POPUP--//

const popupMain = document.querySelector('.popup');
const popupFondo = document.querySelector('.popup-fondo');
const close = document.querySelector('.popup-close');
const close2 = document.querySelector('#Aceptar');



function popUp (){
    popupFondo.style.visibility = 'visible';
    popupMain.classList.add('active');
}

function onView(){
    time = setTimeout(popUp, 2000);
}


close.addEventListener('click', () => {
    popupFondo.style.display = 'none';
    popupMain.classList.remove('active');
});

close2.addEventListener('click', () => {
    popupFondo.style.display = 'none';
    popupMain.classList.remove('active');
});

//FIN CODE POPUP