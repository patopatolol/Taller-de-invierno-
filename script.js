function verificar() {
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    if (password === "Rai2026") {
        mensaje.textContent = "✅ Acceso concedido";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        mensaje.textContent = "❌ Contraseña incorrecta";
        mensaje.style.color = "red";
    }
}

document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificar();
    }
});
