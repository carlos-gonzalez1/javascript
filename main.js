// // Desafio3
// // ejemplos con for while do..while
// // for
// for (let i = 1; i <=4; i++){
//     console.log("iteracion ${i}");
// }
// console.log("Fin del ciclo");

// for (let i = 4; i >=1; i--){
//     console.log("iteracion ${i}");
// }
// console.log("Fin del ciclo");


// for (let i = 1; i <= 4; i++){
//     console.log("Empieza iteracion ${i}");
//     for (let j = 0; j < 4; j++){
//         console.log(j);
//     }
// }


// let ingresarNumero = parseInt(prompt("Ingresar numero"));
// for (let i = 1; i <= 10; i++){
//         let resultado = ingresarNumero * i ;
//         console.log(ingresarNumero +" x "+ i +" = "+ resultado);
//     }
// console.log("Fin del ciclo");

// //ejemplo de while

// let x = 1;
// while (x <= 4){
//     console.log("Iteracion ${x}");
//     x++;
// }
// console.log("Fin de while");

// //ejemplo de do...while

// let y = 1;

// do{
//     console.log("Iteracion ${y}");
//     y++;

// }while (y <= 4);

//desafio4 y desafio complementario

alert("Bienvenido/a a venta online gaming componetes de pc-notebook");

const menuPrincipal = () => {
let producto = prompt(`Ingrese el nombre del producto que desea llevar.
Menu :
* Gabinetes
* Memorias ram
* Motherboards
* Procesadores
* Fuentes de poder
* Auriculares
* Microfono
* Placas de video
* Disco rigidos
* Refrigeracion de pc
* Monitores
* Notebooks`);

switch (producto){
    case "Gabinetes":
        alert("El Gabinete cuesta $10800." + "\n Gracias por su compra ");
        break;
    case "Memoras ram":
        alert("La Memoria ram cuesta $8000." + "\n Gracias por su compra ");
        break;   
    case "Motherboards":
        alert("El Motherboards cuesta $33900." + "\n Gracias por su compra ");
        break;
    case "Procesadores":
        alert("Los Procesadores cuestan $56800." + "\n Gracias por su compra ");
        break;
    case "Fuentees de poder":
        alert("Las Fuentes de poder cuestan $9500." + "\n Gracias por su compra ");
        break;
    case "Auriculares":
        alert("Los Auriculares cuestan $10980." + "\n Gracias por su compra ");
        break;
    case "Microfono":
        alert("Los Microfonos cuestan $9000." + "\n Gracias por su compra ");
        break;
    case "Placas de video":
        alert("Las Placas de video cuestan $97780." + "\n Gracias por su compra");
        break;
    case "Disco rigido":
        alert("Los discos rigidos cuestan $4800." + "\n Gracias por su compra");
        break;
    case "Refrigeracion para pc":
        alert("Las Refrigeracion para pc cuestan $39270." + "\n Gracias por su compra");
        break;
    case "Monitores":
        alert("Los Monitores cuestan $35689." + "\n Gracias por su compra");
        break;
    case "Notebooks":
        alert("Las Notebooks cuestan $84900." + "\n Gracias por su compra ");
        break;
        default:
            alert("Lo lamentamos, por el momento no disponemos de " + producto + ".");
}
};

menuPrincipal();

var desc ;

var ImporteFactura = prompt('Introduzca monto FTR');

var importe = parseInt(ImporteFactura);

var cantidad = parseInt(prompt("Ingresar cantidad"));

var desc = importe* 0.5

var iva = importe * 0.21 ;

var total = importe - desc + iva ;

document.write('<h1> Importe: ' + importe + 'p/ </h1>')
document.write('<h1> Iva: ' + iva + 'p/ </h1>')
document.write('<h1> desc ' + desc + 'p/ </h1>');
document.write('<h1> Total: ' + total + 'p/ </h1>')

