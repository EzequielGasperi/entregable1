let saldo = 1000;
let transacciones = [];

function realizarDeposito() {
    let cantidad = prompt("Ingrese la cantidad a depositar:");
    cantidad = parseFloat(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        mostrarError("La cantidad ingresada no es válida.");
        return;
    }

    saldo += cantidad;
    registrarTransaccion(`Depósito de ${cantidad}`);
    mostrarMensaje(`Se ha realizado un depósito de ${cantidad} pesos.`);
}

function realizarRetiro() {
    let cantidad = prompt("Ingrese la cantidad a retirar:");
    cantidad = parseFloat(cantidad);

    if (isNaN(cantidad) || cantidad <= 0 || cantidad > saldo) {
        mostrarError("La cantidad ingresada no es válida o excede el saldo disponible.");
        return;
    }

    saldo -= cantidad;
    registrarTransaccion(`Retiro de ${cantidad}`);
    mostrarMensaje(`Se ha realizado un retiro de ${cantidad} pesos.`);
}

function mostrarEstadoCuenta() {
    let mensaje = `Saldo actual: ${saldo} pesos\n\nTransacciones:\n`;
    for (let i = 0; i < transacciones.length; i++) {
        mensaje += `${i + 1}. ${transacciones[i]}\n`;
    }
    mostrarMensaje(mensaje);
}

function registrarTransaccion(transaccion) {
    transacciones.push(transaccion);
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function mostrarError(error) {
    console.error(error);
    alert(error);
}