// - -- DOM -- -
const completo = document.getElementById("pantallaCompleta");
const video = document.getElementById("video_sevilla");
const audio = document.getElementById("audio_lluvia");
const boton = document.getElementById("play");
const volumen = document.getElementById("volumen");

// - -- Eventos -- -
// Cargar barra audio al recargar o iniciar pagina
document.addEventListener("DOMContentLoaded", () => {
    volumen.value = audio.volume;
});
// Pantalla completo
completo.addEventListener("click", pantallaCompleta);
// Boton para pausar o reproducir
boton.addEventListener("click", playPause);
// Ajustar audio según barra de volumen
volumen.addEventListener("input", () => {
    audio.volume = volumen.value;
});
// Ajustar barra de volumen según audio
audio.addEventListener("volumechange", () => {
    volumen.value = audio.volume;
});

// Cuando reproduces video, boton cambia nombre
video.addEventListener("play", () => {
    boton.innerHTML = "Pause";
});
video.addEventListener("pause", () => {
    boton.innerHTML = "Play";
});


// - -- Funciones -- -
function pantallaCompleta (){
    if (video.requestFullscreen) { /* Estándar */
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari/IOS */
        video.webkitRequestFullscreen(); 
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    } else {
        console.warn("En este navegador no es posible la pantalla completa");
    }
}

async function playVideo() {
    try {
        await video.play();
    } catch (error){
        warn("Error al reproducir el video");
    }
}

function playPause () {
    if ( boton.innerHTML == "Pause" ) {
        video.pause();
    } else {
        playVideo();
    }
}