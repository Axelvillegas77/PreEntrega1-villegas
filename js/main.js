

let nombreCompleto = prompt("Ingresa tu nombre ");

if (nombreCompleto == "") {
    alert("Es necesario que coloques tu nombre y apellido");
} else {
    alert("Bienvenido/a " + nombreCompleto);
}


for (let i = 1; i <= 1; i++) {
    let pregunta = prompt("Estas buscando algun repuesto en particular");
    if (pregunta != "si") {
        alert("A continuacion te dejamos una lista de productos.");
    } else {
        alert("indicanos que respuesto o accesorio deseas comprar:");
        break;
    }
}

let repuestos = prompt("\n1-Aceite \n2-Cascos \n3-Escapes \n4-Guantes \n5-Cubiertas")
switch (repuestos) {
    case "1":
        alert("Seleccionaste Aceite")
        break;

    case "2":
        alert("Seleccionaste Cascos")
        break;

    case "3":
        alert("Seleccionaste Escapes")
        break;

    case "4":
        alert("Seleccionaste Guantes")
        break;

    case "5":
        alert("Seleccionaste Cubiertas")
        break;

    default:
        alert("INGRESO NO VALIDO")
        break;
}

const saludo2 = function (saludo, nombre) {
    alert(saludo + " " + nombre);
}

saludo2("Gracias por tu compra", nombreCompleto);























// let producto = prompt("nombra los respuestos o accesorios que buscas, para salir preciona 0");

// while (producto != "0") {
//     alert("ingresaste el repuesto o accesorio: " + producto);
//     producto = prompt("nombra los respuestos o accesorios que buscas, para salir preciona 0");
// }

































