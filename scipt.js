function mostrarMateriales() {
    const caja = document.getElementById("materiales");

    if (caja.classList.contains("oculto")) {
        caja.classList.remove("oculto");
        caja.classList.add("visible");
    } else {
        caja.classList.remove("visible");
        caja.classList.add("oculto");
        boton.innerHTML = "Ocultar materiales";
    }
}