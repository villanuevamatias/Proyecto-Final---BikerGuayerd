
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
if (m<10) {
  m = "0" + m;
}
var horaMilitar = "" + h + m;

function saluTemp(momento){
  document.getElementById("saludoTemporal").innerHTML = momento;
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
// validacion
let formulario=[
  campo={
  "name": "nombre",
  "valor":false,
  "focus":document.querySelector("#nombreF")
  },
     
   campo={
  "name": "mail",
  "valor":false,
  "focus":document.querySelector("#mailF")
},
campo={
  "name": "mensaje",
  "valor":false,
  "focus":document.querySelector("#mensajeF")
}
];

const validarnombre=()=>{//Nombre: mínimo 3 y máximo 16 dígitos.
  let nombre = document.querySelector("#nombreF").value;
  console.log("entro nombre");
let regext = /[a-z]{3,16}/i;
  if (regext.test(nombre)) {
      console.log("valido");
      formulario.forEach(a=>{
           if(a.name==="nombre"){a.valor=true}});
  }else{
      console.log("invalido");
      formulario.forEach(a=>{ 
          if(a.name==="nombre"){
          a.valor=false;
          a.focus.focus()}});
      }
}
let p=document.querySelector("#nombreF");
p.addEventListener("blur",validarnombre);




const validarmail=()=>{//Mail: Debe ser un mail válido.
  let elemento = document.querySelector("#mailF").value;
  console.log("entromail");

let regext = /@/;
  if (regext.test(elemento)) {
      console.log("valido");
      formulario.forEach(a=>{
          if(a.name==="mail"){a.valor=true}});
 }else{
  console.log("invalido");

     formulario.forEach(a=>{ 
         if(a.name==="mail"){
         a.valor=false;
         a.focus.focus()}});

 }
}
document.querySelector("#mailF").addEventListener("blur",validarmail);


const validarmensaje=()=>{//Mensaje: Debe contener al menos 30 caracteres.
  let elemento = document.querySelector("#mensajeF").value;
  console.log("entro mensaje");

let regext = /[a-z]/i;
  if (regext.test(elemento)) {
      console.log("valido");
      formulario.forEach(a=>{
          if(a.name==="mensaje"){a.valor=true}});
 }else{
  console.log("invalido");

   formulario.forEach(a=>{ 
         if(a.name==="mensaje"){
         a.valor=false;
         a.focus.focus()}});

 }
 
}
document.querySelector("#mensajeF").addEventListener("blur",validarmensaje);


//envio del form
submit=()=>{

 if(formulario.forEach(a=>{
      if(!a.valor){
          a.focus.focus();
          return false;
          console.log(`no se envio falto completar ${a.name}`);
        }else{ return true;
      }
    })){
      
      console.log(`envio exitoso`);
      // realizar post
      let formpost={
        "name":document.querySelector("#nombreF").value,
        "email":document.querySelector("#mailF").value,
        //"phone":document.querySelector("#phoneF").value
        "subject":document.querySelector("#selectF").value,
        "message":document.querySelector("mensajeF").value
      };
      console.log(formpost);

    

    }

}
document.querySelector("#botonEnviar")