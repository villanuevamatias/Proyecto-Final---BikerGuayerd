// estas funcione  ocultara y mostrara en intervalos el globo por encima del icono de wsp.
let a = setInterval(() => {
  mostrarGlobo();
}, 21000);
let b = setInterval(() => {
  ocultarGlobo();
}, 6990);
function mostrarGlobo() {
  document.getElementById("globo").style.display = "flex";
}
function ocultarGlobo() {
  document.getElementById("globo").style.display = "none";
}
//---LOGIN---//
//---LOGIN---//
/*SALUDO*/
const saludoUs = document.querySelector("#saludoUser");
const today = new Date();
var h = today.getHours();
var m = today.getMinutes();
if (m < 10) {
  m = "0" + m;
}
var horaMilitar = "" + h + m;

function saluTemp(momento) {
  document.getElementById("saludoTemporal").innerHTML = momento;
}

function saludar() {
  saludoUs.style.visibility = "visible";
  userS = localStorage.getItem("usuarios");
  document.getElementById("timeH").innerHTML =
    h + ":" + m + " " + "Hs" + " " + "-";
  if (horaMilitar >= 1220 && horaMilitar < 1900) {
    saluTemp("Buenas tardes, ");
  } else if (horaMilitar > 0006 && horaMilitar < 0612) {
    saluTemp("Buenas madrugadas, ");
  } else if (horaMilitar > 0611 && horaMilitar < 1220) {
    saluTemp("Buenos días, ");
  } else {
    saluTemp("Buenas Noches, ");
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
  /*Almacena los datos en el LocalStorage*/
  localStorage.setItem("usuarios", inputUser);

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
// validacion
let formulario = [ //usaremos este objeto como tabla de comprovacion para saber si todos los campos fueron llenados de manera correcta
  //algo parecido al flag(bandera)
  (campo = {
    name: "nombre",
    valor: false,
    focus: document.querySelector("#nombreF"),
  }),
  (campo = {
    name: "mail",
    valor: false,
    focus: document.querySelector("#mailF"),
  }),
  (campo = {
    name: "mensaje",
    valor: false,
    focus: document.querySelector("#mensajeF"),
  }),
];

const validarnombre = () => {
  //Nombre: mínimo 3 y máximo 16 dígitos.
  let nombre = document.querySelector("#nombreF").value;
  console.log("entro nombre");
  let regext = /[a-z]{3,16}/i;
  if (regext.test(nombre)) {//comprobar si hay mach con el regext
    console.log("valido");// si es valido
    formulario.forEach((a) => {// recorremos el objeto formulario que usaremos luego para el submit
      if (a.name === "nombre") {//buscando el campo que dice nombre
        a.valor = true;// asignaremos la bandera del campo como verdadera
        a.focus.classList.remove("inputIncorrecto");// borraremos la clase inpud incorrecto por si anteriormente fue asignada por previo iingreso fallido de dato
        
      }
    });
  } else {// similar al if solo que en este caso si el ingreso es invalido asignaremos una bandera falsa y al campo le agregaremos la clase inputIncorrecto para resaltar el campo en rojo y dejar asi en claro que el dato ingresado es incorrecto. 
    console.log("invalido");
    formulario.forEach((a) => {
      if (a.name === "nombre") {
        a.valor = false;
        a.focus.classList.add("inputIncorrecto");
      }
    });
  }
};
let p = document.querySelector("#nombreF");
p.addEventListener("blur", validarnombre);

const validarmail = () => {
  //Mail: Debe ser un mail válido.
  let elemento = document.querySelector("#mailF").value;
  console.log("entromail");
  
  let regext = /@/ ;
  if (regext.test(elemento)&&(elemento.endsWith('.com')||(elemento.endsWith('.com.ar')))) {
    console.log("valido");
    formulario.forEach((a) => {
      if (a.name === "mail") {
        a.valor = true;
        a.focus.classList.remove("inputIncorrecto");
        
      }
    });
  } else {
    console.log("invalido");
    
    formulario.forEach((a) => {
      if (a.name === "mail") {
        a.valor = false;
        a.focus.classList.add("inputIncorrecto");
        
      }
    });
  }
};
document.querySelector("#mailF").addEventListener("blur", validarmail);

const validarmensaje = () => {
  //Mensaje: Debe contener al menos 30 caracteres.
  let elemento = document.querySelector("#mensajeF").value;
  console.log("entro mensaje");
  
  let regext = /[ a-zA-Z0-9_\n\r\t\f]{30,}/i;
  if (regext.test(elemento)) {
    console.log("valido");
    formulario.forEach((a) => {
      if (a.name === "mensaje") {
        a.valor = true;
        a.focus.classList.remove("inputIncorrecto");
        
      }
    });
  } else {
    console.log("invalido");
    
    formulario.forEach((a) => {
      if (a.name === "mensaje") {
        a.valor = false;
        a.focus.classList.add("inputIncorrecto");
        
      }
    });
  }
};
document.querySelector("#mensajeF").addEventListener("blur", validarmensaje);

//envio del form
submit = () => {
  let flag=true  
  formulario.forEach((a) => {//comprobaremos que todas las banderas esten en verdadero para estar seguro de que todos los campos entan llenos de forma correcta
    if (!a.valor&&flag) { // el motivo del and flag es para que se detenga en el primer campo que encuente incorrecto para luego poder  llamar al focus del primero faltante
      a.focus.focus();//haremos focus en el primer campo incorrecto 
      console.log(`no se envio falto completar ${a.name}`);
      flag=false;
    } 
  });
  if(flag){// siempre y cuan do la vandera se quedo en verdadero (es decir que no ento al if anterior)
    console.log(`envio exitoso`);
    // realizaremos post
    let formpost = {//primero preparamos el objeto para post, es decir traeromos los valores cargados en el formulario
      "name": document.querySelector("#nombreF").value,
      "email": document.querySelector("#mailF").value,
      //"phone":document.querySelector("#phoneF").value
      "subject": document.querySelector("#selectF").value,
      "message": document.querySelector("#mensajeF").value,
    };
    console.log(formpost);//se consologuea todo para poder dar un mejor seguimiento en estapas de test. podremos ver que en el objeto esten todos los datos que cargamos en el formulario
    let url = "https://demo2420474.mockable.io/submitForm";
    
    fetch(url, { // fetch para post, por falta de instructivos se busco este metodo en internet, donde el fretch se le da la orde de post
      method: 'POST', 
      body: JSON.stringify(formpost), 
      // headers:{  /////NO ENTENDI PARA QUE ERA ESTA PARTE PERO COMO SI LO SACO NO HACE CAMBIO ALGUNO QUEDO COMENTADO//
        //   'Content-Type': 'application/json'
        // }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('POST Exitoso:', response));
      
      // terminado el post borraremos los campos y volveremos las banderas a false
      formulario.forEach((a) => {
        console.log("borrando campos")
        a.focus.value="";
        a.valor=false;
      });
    };
  };
  
  
  //preventDefault 
  let form= document.querySelector("#formInterno");
  form.addEventListener("submit", (e)=> e.preventDefault());
  document.querySelector("#formInterno").addEventListener("submit",submit);