//1ra Entrega de Proyecto Final

alert("Bienvenido/A A Venta Online Gaming Componentes De Pc-Notebook");

const ingreseNombre = prompt("Ingrese su nombre");
const ingreseSuApellido = prompt("Ingrese apellido");
alert("Bienvenido " + ingreseNombre + " " + ingreseSuApellido + "!");


let lista = prompt(`Ingrese el nombre del producto con la primera letra en mayuscula.
Lista De Productos :
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

switch (lista){
    case "Gabinetes":
        alert("El Gabinete cuesta $10800.");
        break;
    case "Memorias ram":
        alert("La Memoria ram cuesta $8000.");
        break;   
    case "Motherboards":
        alert("El Motherboards cuesta $33900.");
        break;
    case "Procesadores":
        alert("Los Procesadores cuestan $56800.");
        break;
    case "Fuentees de poder":
        alert("Las Fuentes de poder cuestan $9500.");
        break;
    case "Auriculares":
        alert("Los Auriculares cuestan $10980.");
        break;
    case "Microfono":
        alert("Los Microfonos cuestan $9000.");
        break;
    case "Placas de video":
        alert("Las Placas de video cuestan $97780.");
        break;
    case "Disco rigido":
        alert("Los discos rigidos cuestan $4800.");
        break;
    case "Refrigeracion para pc":
        alert("Las Refrigeracion para pc cuestan $39270.");
        break;
    case "Monitores":
        alert("Los Monitores cuestan $35689.");
        break;
    case "Notebooks":
        alert("Las Notebooks cuestan $84900.");
        break;
        default:
            alert("Lo lamentamos, por el momento no disponemos de " + lista + ".");
}
const menuPrincipal = () => {};

menuPrincipal();

var desc ;

var ImporteFactura = prompt('Introduzca monto FTR');

var importe = parseInt(ImporteFactura);

var cantidad = parseInt(prompt("Ingresar cantidad"));

var desc = importe* 0.2

var iva = importe * 0.21 ;

var total = importe - desc + iva ;

document.write('<h1> Importe: ' + importe + 'p/ </h1>')
document.write('<h1> Iva: ' + iva + 'p/ </h1>')
document.write('<h1> desc ' + desc + 'p/ </h1>');
document.write('<h1> Total: ' + total + 'p/ </h1>')

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre  = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 0.21;
    }
    vender(){
        this.vendido = true;
    }
    tostring(){
        return `Producto: ${this.nombre}\nprecio: ${this.precio}\ncantidad: ${this.cantidad}`;
    }
}

const productos = [{id: 1, Producto: "Gabinete", precio: 10800, cantidad: 1},
                { id: 2, Producto: "Memoras ram", precio: 8000, cantidad: 1},
                {id: 3, Producto: "Motherboards", precio: 33900, cantidad: 1},
                {id: 4, Producto: "Procesadores", precio: 56800, cantidad: 1},
                {id: 5, Producto: "Fuentees de poder", precio: 9500, cantidad: 1},
                {id: 6, Producto: "Auriculares", precio: 10980, cantidad: 1},
                {id: 7, Producto: "Microfono", precio: 9000, cantidad: 1},
                {id: 8, Producto: "Placas de video", precio: 97780, cantidad: 1}];

                console.log(productos);

const Productos1 = [];
Productos1.push(new Producto("Disco rigido", "4800", 1));
Productos1.push(new Producto("Refrigeracion para pc", "39270", 1));
Productos1.push(new Producto("Monitores", "35689", 1));
Productos1.push(new Producto("Notebooks", "84900",  1));
console.log(Productos1);

                for (const producto of productos){
                    console.log(producto.id);
                    console.log(producto.Producto);
                }

const buscar = productos.find(Producto => Producto.id === 3);
console.log(buscar);

const baratos = productos.filter(Producto => Producto.precio < 10000);
console.log(baratos);

const aumento = productos.map(Producto => Producto.precio += 300);
console.log(aumento);

console.log(productos.sort(function(prev, next){
    return prev.precio - next.precio;
}));
