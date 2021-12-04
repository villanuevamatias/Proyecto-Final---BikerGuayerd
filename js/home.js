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

/*BANNER NUEVO*/
let APIbanner = fetch(`http://demo2420474.mockable.io/getHomeBanner`); //trae por defecto GET
APIbanner.then((res) => {
  return res.json();
})
  .then((data) => {
    document.querySelector("#portada").src = data.imgUrl;
  })
  .catch((error) => console.log(error));
/*FIN BANNER NUEVO*/

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
let flag=false;//esta bandera se debera mantener en true dandonos el pase de las validaciones como exitosas
const validarmail = () => {
  //Mail: Debe ser un mail válido incluyendo arroba y terminando tanto .com y .com.ar .
  let elemento = document.querySelector("#em").value;
  
  let regext = /@/;
  
      if (regext.test(elemento)&&(elemento.endsWith('.com')||(elemento.endsWith('.com.ar')))) {
        
      console.log("valido");
      flag=true; //poner bandera en true dando entender que ya la primera validacion es correcta
      document.querySelector("#em").classList.remove("inputIncorrecto");//quitar clase que resalte el imput incorrecto solo por si esta asiganda por errores anteriores
     
    } else {
      console.log("invalido");
      flag=false;//poner bandera en false dando a entender que a fallado en la validacion
      document.querySelector("#em").classList.add("inputIncorrecto"); //asignar clase que resalte el imput incorrecto. 
      document.querySelector("#em").focus(); //hacer focus en el imput incorrecto (posicionarnos en el campo incorrecto)
    }
     } 
     const validaruser = () => { // todo  el funcionamiento de esta validacion es similar a la de validarmail
       //Mail: Debe ser un mail válido.
       let elemento = document.querySelector("#us").value;
      
       let regext = /[a-z]{3,16}/i;
       console.log(elemento)
       if (regext.test(elemento)) {
         
         console.log("valido");
         flag=true;
         document.querySelector("#us").classList.remove("inputIncorrecto");
         
        } else {
        console.log("invalido");
        flag=false;
        document.querySelector("#us").classList.add("inputIncorrecto");
        document.querySelector("#us").focus();
      }
    }
    
function store() { // funcion que validara los datos,guardara en localstorage, activara popup de descuento, y tambien realizar el post, todo siempre y cuando las validaciones sean correctas. 
    validaruser();//primero valida user
    if(flag){// si user valido bien, validarmail
      validarmail();
    }else{return}

    if(flag){// ya para esta instancia se an validado ambos,  
      postlogin();
    /*Recibe los datos del imput*/
  var inputUser = document.getElementById("us").value;
  var inputEmail = document.getElementById("em").value;
  var Novedades = document.getElementById("Novedades");
  /*Almacena los datos en el LocalStorage*/
  localStorage.setItem("usuarios", inputUser);

  // Comprobar si local esta guardado
  userS = localStorage.getItem("usuarios");
  var correo = localStorage.getItem("Email");
  console.log(Novedades.checked);
  if (inputEmail === correo) {
    
    sessionStorage.setItem("ocultarLogin", "si"); // esta variable temporaria nos servira para mostrar o los login de los demas site.
    ocultarLogin();
    if (Novedades.checked) {
      //si el check box fue tildado mostraremos el logo flotante de hotsale.
      sessionStorage.setItem("Novedades", "si");
      mostrarhotsale();
    }
  } else {
    // en  caso que el usuario no este guardado en local storage
    asignarcupon(); // funcion que asignara cupon y desprendera un popup
    if (Novedades.checked) {
      //si el check box fue tildado mostraremos el logo flotante de hotsale.
      mostrarhotsale();
      sessionStorage.setItem("Novedades", "si");
    }
    sessionStorage.setItem("ocultarLogin", "si"); // esta variable temporaria nos servira para mostrar o los login de los demas site.
    ocultarLogin();
    localStorage.setItem("Email", inputEmail);

    // console.log(inputUser.value);
    // console.log(inputEmail.value);
    /*Limpia los campos de los imputs*/

    // document.getElementById("us").value="";
    // document.getElementById("em").value="";
  }
}
}
//post Recolectar datos del usuario y enviar al servidor.*
//objeto para el post*
let postlogin=()=>{
let url= "https://demo2420474.mockable.io/userData" ;
//se declara objeto que se posteara
let objeto={
   token:"", name:"", email:"", sendEmail:false 
}
//se le asignan valores al objeto a postear
objeto.token=parseInt(Math.random()*100+1);
objeto.name=document.getElementById("us").value;
objeto.email=document.getElementById("em").value;
 objeto.sendEmail=document.getElementById("Novedades").checked; 
console.log(objeto);

fetch(url, {  method: 'POST', 
  body: JSON.stringify(objeto), 
  // headers:{  /////NO ENTENDI PARA QUE ERA ESTA PARTE PERO COMO SI LO SACO NO HACE CAMBIO ALGUNO QUEDO COMENTADO//
    //   'Content-Type': 'application/json'
    // }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('POST Exitoso:', response));
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
    document.getElementById("contenedorLogin").style.display = "none";
  }
}

//--FIN-LOGIN-//
// ASIGNACION DESCUENTO
function asignarcupon() {
  let APIcupon = fetch(`https://demo2420474.mockable.io/getCoupon`);
  APIcupon.then((res) => {
    return res.json();
  })
    .then((data) => {
      console.log("entra data");
      return (document.getElementById(
        "textoDescuento"
      ).innerHTML = `Te has ganado el cupón ${data.text} con un ${data.discountPercentage}% de descuento`);
    })
    .catch((error) => console.log(error));

  onView();
}
// fin de funcion bono
//
//
//
//--CODE POPUP--//

const popupMain = document.querySelector(".popup");
const popupFondo = document.querySelector(".popup-fondo");
const close = document.querySelector(".popup-close");
const close2 = document.querySelector("#Aceptar");

function popUp() {
  popupFondo.style.visibility = "visible";
  popupMain.classList.add("active");
}

function onView() {
  time = setTimeout(popUp, 2000);
}

close.addEventListener("click", () => {
  popupFondo.style.display = "none";
  popupMain.classList.remove("active");
});

close2.addEventListener("click", () => {
  popupFondo.style.display = "none";
  popupMain.classList.remove("active");
});

//FIN CODE POPUP
