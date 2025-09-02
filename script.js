/* script.js */
const datosCuriosos = {
  desarrollo: ">El primer sitio web fue publicado en 1991_",
  mentalidad: ">Las neuronas pueden transmitir impulsos a 400 km/h_",
  detalle: ">El cubo de Rubik tiene más de 43 trillones de combinaciones_"
};

const dialog = document.querySelector('#mi-modal');
const closeBtn = document.querySelector('#cerrarModal');
const modalText = dialog.querySelector('p');

document.querySelector("main").addEventListener("click", (e) => {
  if (e.target.classList.contains("abrirModal")) {
    const clave = e.target.dataset.id;
    modalText.textContent = datosCuriosos[clave];
    dialog.showModal(); 
  }
});

closeBtn.addEventListener("click", () => dialog.close());
