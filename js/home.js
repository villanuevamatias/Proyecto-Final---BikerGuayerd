const contenedor = document.querySelectorAll(".contenedor");
const h2 = document.querySelectorAll(".h2");

h2.forEach((cadaH2, i) => {
  h2[i].addEventListener("click", () => {
    contenedor.forEach((cadaContenedor, i) => {
      contenedor[i].classList.remove("activo");
    });

    contenedor[i].classList.add("activo");
  });
});
