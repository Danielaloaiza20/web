function mostrarInicio() {
    document.getElementById("contenido-Inicio").style.display = "block";
    document.getElementById("contenido-Servicios").style.display = "none";
}

function mostrarServicios() {
    document.getElementById("contenido-Inicio").style.display = "none";
    document.getElementById("contenido-Servicios").style.display = "block";
}

function convertirADolares() {
    var monto = document.getElementById("monto").value;
    var resultado = monto / 3.81; // Suponiendo un cambio de 1 USD = 3.81 EUR
    document.getElementById("resultado").innerText = "El monto en dólares es: " + resultado.toFixed(2) + " USD";
}

function convertirAEuros() {
    var monto = document.getElementById("monto").value;
    var resultado = monto / 4.08; // Suponiendo un cambio de 1 EUR = 4.87 EUR
    document.getElementById("resultado").innerText = "El monto en euros es: " + resultado.toFixed(2) + " EUR";
}

function convertirAReal() {
    var monto = document.getElementById("monto").value;
    var resultado = monto / 750; // Suponiendo un cambio de 1 R = 750 R
    document.getElementById("resultado").innerText = "El monto en real es: " + resultado.toFixed(2) + " R";
}

function colocarOtroValor() {
    document.getElementById("monto").value = ""; // Limpiar el campo de entrada
    document.getElementById("resultado").innerText = ""; // Limpiar el resultado
}

console.log('El script se ha cargado correctamente.');
