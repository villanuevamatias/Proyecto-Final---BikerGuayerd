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
console.log(coll);
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
    document.getElementById("contenedorLogin").style.display="none";
  }
  
}

//--FIN-LOGIN-//

//--CODE POPUP--//

// const popupMain = document.querySelector('.popup');
// const popupFondo = document.querySelector('.popup-fondo');
// const close = document.querySelector('.popup-close');
// const close2 = document.querySelector('#no');



// function popUp (){
//     popupFondo.style.visibility = 'visible';
//     popupMain.classList.add('active');
// }

// function onView(){
//     time = setTimeout(popUp, 2000);
// }
// onView();

// close.addEventListener('click', () => {
//     popupFondo.style.display = 'none';
//     popupMain.classList.remove('active');
// });

// close2.addEventListener('click', () => {
//     popupFondo.style.display = 'none';
//     popupMain.classList.remove('active');
// });

//FIN CODE POPUP