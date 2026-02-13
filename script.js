const inicio = document.querySelector(".inicio");
const pedido = document.querySelector(".pedido");
const audio = document.getElementById("musica");

/* Flecha */

function activarMusica() {
        // Intentamos reproducir el audio
            audio.play().then(() => {
                    console.log("Música reproduciéndose correctamente");
                        }).catch(error => {
                                // El navegador bloqueó el autoplay (esto es normal)
                                        console.log("Esperando interacción del usuario para sonar...");
                                            });
                                            }

                                            // 3. EVENTO: Escuchar el primer clic en la pantalla
                                            // Esto "desbloquea" el sonido en navegadores como Chrome o Safari
                                            document.addEventListener("click", () => {
                                                activarMusica();
                                                }, { once: true }); // El 'once: true' hace que este evento solo se dispare una vez
}

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
            
                // Usamos márgenes más pequeños para móvil
                    const margen = 20;
                        
                            // Calculamos el espacio disponible restando el tamaño del botón
                                const maxX = window.innerWidth - btnNo.offsetWidth - margen;
                                    const maxY = window.innerHeight - btnNo.offsetHeight - margen;

                                        const x = Math.max(margen, Math.random() * maxX);
                                            const y = Math.max(margen, Math.random() * maxY);

                                                btnNo.style.position = "fixed";
                                                    btnNo.style.left = x + "px";
                                                        btnNo.style.top = y + "px";
                                                        }
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
