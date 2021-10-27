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
  var inputUser = document.getElementById("us");
  var inputEmail = document.getElementById("em");
  /*Almacena los datos en el LocalStorage*/
  localStorage.setItem("usuarios", inputUser.value);
  localStorage.setItem("Email", inputEmail.value);
  // console.log(inputUser.value);
  // console.log(inputEmail.value);
  /*Limpia los campos de los imputs*/
  document.getElementById("us").value="";
  document.getElementById("em").value="";
}

function validation(){
  var nombre = localStorage.getItem("Usuario");
  var correo = localStorage.getItem("Email");
  console.log(nombre);
  console.log(correo);

}
validation();

//--FIN-LOGIN-//

//--CODE POPUP--//

const popupMain = document.querySelector('.popup');
const popupFondo = document.querySelector('.popup-fondo');
const close = document.querySelector('.popup-close');
const close2 = document.querySelector('#no');



function popUp (){
    popupFondo.style.visibility = 'visible';
    popupMain.classList.add('active');
}

function onView(){
    time = setTimeout(popUp, 2000);
}
onView();

close.addEventListener('click', () => {
    popupFondo.style.display = 'none';
    popupMain.classList.remove('active');
});

close2.addEventListener('click', () => {
    popupFondo.style.display = 'none';
    popupMain.classList.remove('active');
});

//FIN CODE POPUP//