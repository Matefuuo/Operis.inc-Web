let posicion = 0;
const CARD_WIDTH = 270;

function actualizarSlider() {
    const slider = document.getElementById("slider");
    const cards = document.querySelectorAll(".card");
    slider.style.transform = `translateX(-${posicion * CARD_WIDTH}px)`;
    document.getElementById("contador").textContent = `${posicion + 1} / ${cards.length}`;
}

function siguiente() {
    const cards = document.querySelectorAll(".card");
    if (posicion < cards.length - 1) {
        posicion++;
    }
    actualizarSlider();
}

function anterior() {
    if (posicion > 0) {
        posicion--;
    }
    actualizarSlider();
}
