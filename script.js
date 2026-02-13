const inicio = document.querySelector(".inicio");
const pedido = document.querySelector(".pedido");
const audio = document.getElementById("musica");

/* Música al primer clic */
document.body.addEventListener("click", () => {
    audio.play();
}, { once: true });

/* Flecha */

function mostrarSeccion() {
    const inicio = document.querySelector(".inicio");
    const pedido = document.getElementById("seccionPedido");
    
    inicio.style.opacity = "0";
    setTimeout(() => {
        inicio.style.display = "none";
        pedido.style.display = "flex";
        setTimeout(() => { pedido.style.opacity = "1"; }, 50);
    }, 500);
}

// ... (funciones anteriores igual) ...

function huir() {
    const btnNo = document.getElementById("btnNo");
    
    // Margen de seguridad para que no toque los bordes (50px)
    const margen = 150;
    
    // Calculamos posiciones restando el ancho del botón y el margen
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - margen);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - margen);

    // Aseguramos que x e y no sean menores al margen
    const finalX = Math.max(margen, x);
    const finalY = Math.max(margen, y);

    btnNo.style.position = "fixed";
    btnNo.style.left = finalX + "px";
    btnNo.style.top = finalY + "px";
}

function lanzarConfeti() {
    const container = document.getElementById("confetti-container");
    const colores = ['#ff4d6d', '#ffb3c1', '#ff758f', '#c9184a', '#ff8fa3'];

    // Lanzamos 100 trozos de confeti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.opacity = Math.random();
        
        container.appendChild(confetti);
        
        // Eliminar para no sobrecargar la página
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function celebrar() {
    const pedido = document.getElementById("seccionPedido");
    const celebracion = document.getElementById("seccionCelebracion");

    // Ocultamos la sección de pedido y mostramos la de celebración
    pedido.style.display = "none";
    celebracion.style.display = "flex";
    
    // Forzamos la opacidad para la transición
    setTimeout(() => {
        celebracion.style.opacity = "1";
    }, 50);

    lanzarConfeti();
}
