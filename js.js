console.log("Hola mundo");

function preguntarNombre() {
  let nombre = localStorage.setItem("nombre", prompt("Cuál es tu nombre"));
  if (localStorage.nombre === null) {
    console.log("vamos");
  }
}

if (localStorage.nombre === undefined) {
  preguntarNombre();
}
if (localStorage.nombre == null) {
  preguntarNombre();
} else if (localStorage.nombre != undefined) {
  console.log("Bienvenido!");
}

document.getElementById("mostrarNombre").innerHTML = localStorage.nombre;

function editarNombre() {
  let nombre = undefined;
  nombre = localStorage.setItem("nombre", prompt("Cuál es tu nombre"));
  console.log("Listo");
  document.getElementById("mostrarNombre").innerHTML = localStorage.nombre;
}

function eliminarNombre() {
  localStorage.removeItem("nombre");
  console.log("Eliminado");
  document.getElementById("mostrarNombre").innerHTML = "";
}
document.addEventListener("keyup", (cadena) => {
  if (cadena.target.matches("#formulario")) {
    if (cadena.key === "Escape") cadena.target.value = "";
    document.querySelectorAll(".team").forEach((equipo) => {
      equipo.textContent
        .toLowerCase()
        .includes(cadena.target.value.toLowerCase())
        ? equipo.classList.remove("filtro")
        : equipo.classList.add("filtro");
    });
  }
});
