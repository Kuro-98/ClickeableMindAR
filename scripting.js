// Variables globales
const startLink = document.querySelector('#startLink'); // Selecciona el elemento con el ID "startLink" y lo almacena en la variable "startLink"
const examplePlane = document.querySelector('#example-plane'); // Selecciona el elemento con el ID "example-plane" y lo almacena en la variable "examplePlane"

let isBlue = true; // Variable de estado que rastrea si el color actual del plano es azul o no

// Funciones
function toggleColor() {
    // Función para alternar el color del plano
    const newColor = isBlue ? 'red' : 'blue'; // Determina el nuevo color en función del estado actual
    examplePlane.setAttribute('material', `color: ${newColor}`); // Establece el nuevo color en el atributo "material" del plano
    isBlue = !isBlue; // Alterna el estado de la variable para la próxima vez
}

function hideStartLink() {
    // Función para ocultar el botón cuando se pierde el objetivo
    startLink.style.display = 'none'; // Oculta el botón estableciendo su estilo de visualización en "none"
}

// Event Listeners
examplePlane.addEventListener('click', toggleColor); // Escucha el evento de clic en el plano y llama a la función "toggleColor"

document.addEventListener('targetFound', () => {
    // Escucha el evento 'targetFound' para iniciar la animación y mostrar el botón
    startLink.style.display = 'inline-block'; // Muestra el botón estableciendo su estilo de visualización en "inline-block"
});

document.addEventListener('targetLost', hideStartLink); // Escucha el evento 'targetLost' para ocultar el botón cuando se pierde el objetivo
hideStartLink(); // Llama a la función "hideStartLink" para ocultar inicialmente el botón
