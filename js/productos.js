let APIproductos = fetch(`https://demo2420474.mockable.io/productList`);

APIproductos.then((res) => {
  return res.json();
})
  .then((data) => {
    console.log("entro al then");
    let i = 0;
    data.forEach((e) => {
      console.log("entro al foreach");
      document.querySelector("#productos").innerHTML += `<div class="grid">
      <div class="producto">
          <img class="producto__imagen image-1" src="${e.imgUrl}">
          <div class="producto__informacion">
              <h3 class="producto__nombre">${e.title}</h3>
              <p class="producto__specs">${e.description}
                  <ul class="ulist">
                      <li class="inlist" id="price${i}">${e.price} ${e.currency}</li>
                      <li class="inlist" id="discountPrice${i}" style="display:none">${e.discountPrice} ${e.currency}</li>
                      <li class="inlist">Stock: ${e.inStock}</li>
                  </ul>
              </p>
              <div class="botondiv">
                  <button class="boton">Comprar <svg class="vector" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                  </svg></button>
              </div>
          </div>
      </div>`;
      if (e.discountPrice) {
        document.querySelector(`#price${i}`).classList.add("tachado");
        document.querySelector(`#discountPrice${i}`).style.display = "block";
        document.querySelector(`#discountPrice${i}`).classList.add("negrita");
      }
      i++;
    });
  })
  .catch((error) => {
    console.log(error);
  });

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
