// Mensaje de bienvenida
alert("¡Bienvenido a mi portafolio!");

// Cambiar texto al hacer clic
document.getElementById("btn-cambiar-texto").addEventListener("click", () => {
    document.getElementById("texto-sobre-mi").textContent =
        "Este texto ha cambiado gracias a JavaScript ";
});

// Mostrar/Ocultar texto extra
document.getElementById("toggle-extra").addEventListener("click", () => {
    const texto = document.getElementById("texto-extra");
    texto.classList.toggle("oculto");
});
