
class Producto {
    constructor(upc, nombre, marca, precio) {
        this.upc = upc;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

//  Evento para eliminar todo 
const botonRemoverProductos = document.getElementById("revoverProductos")
botonRemoverProductos.addEventListener("click", removerProductos);

//  Evento para dark mode
const botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", cambiarTema);

//  Evento para mostrar menu productos
const mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario)

//  Evento para guardar formulario de productos
const formulario = document.getElementById("formularioProductos-1");
formulario.addEventListener("submit", guardarProducto);

//  Funcion para cambiar tema
function cambiarTema() {
    document.body.classList.toggle("darkMode");
}

//  Elimniamos todos los productos
function removerProductos() {
    localStorage.clear();
    mostrarListado(cargarListado());
}

//  Funcion para cargar listado del localStorage o iniciarlo si no hay
function cargarListado() {
    const listadoProductos = JSON.parse(localStorage.getItem("listadoProductos"));
    if (listadoProductos == null) {
        return [];
    }
    return listadoProductos;
}

//  Funcion para guardar en localStorage
function guardarListado(listadoProductos) {
    localStorage.setItem("listadoProductos", JSON.stringify(listadoProductos));
    mostrarListado(listadoProductos);
}

//  Funcion para guardar producto
function guardarProducto(e) {
    e.preventDefault();
    const formulario = new FormData(e.target);
    const upc = formulario.get("upc");
    const nombre = formulario.get("nombre");
    const marca = formulario.get("marca");
    const precio = formulario.get("precio");
    

    const producto = new Producto(upc, nombre, marca, precio);

    if (validarformulario(producto)) {
        
        const listadoProductos = cargarListado();

        listadoProductos.push(producto);

        guardarListado(listadoProductos);

        document.getElementById('formularioProductos-1').reset();
    } else {
        mostrarError("Campos vacios, por favor ingrese todos los datos");
    }
}

//  Muestra un error (Nuevo)
function mostrarError(mensaje) {
    const div = document.createElement("div");
    div.classList.add("alert", "alert-danger", "m-3");
    div.textContent = mensaje;
    const menu = document.getElementById("menuAgregar");
    menu.appendChild(div);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

//  Valida que no tenga campos vacios 
function validarformulario(producto){
    let salida = true;
    const campos = Object.values(producto);
    campos.forEach(campo => {
        if (campo === " ") {
            salida = false;
        }
    });
    return salida;
}

//  Funcion para mostrar menu de producto
function mostrarFormulario() {
    document.getElementById("menuAgregar").classList.toggle("oculto");
}

//  Funcion para armar una tarjeta
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta", "m-2");

    const btnEliminar = document.createElement("div");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn", "btn-danger", "float-end", "m-2");
    btnEliminar.setAttribute("id", elemento.upc);
    btnEliminar.setAttribute("onclick", `eliminarProducto(${elemento.upc})`);
    tarjeta.appendChild(btnEliminar);

    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = elemento.nombre
    tarjeta.appendChild(nombreProducto);

    const marca = document.createElement("div");
    marca.textContent = `Marca: ${elemento.marca}`;
    tarjeta.appendChild(marca);

    const precio = document.createElement("div");
    precio.textContent = `Precio: ${elemento.precio}`;
    tarjeta.appendChild(precio);

    return tarjeta;
}

//  Eliminar un producto especifico
function eliminarProducto(upc){
    let listadoProductos = cargarListado();
    listadoProductos = listadoProductos.filter(producto => producto.upc != upc);
    guardarListado(listadoProductos);
}

function mostrarListado(listadoProductos) {
    const listado = document.getElementById("listado");
    listado.textContent = "";
    listadoProductos.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}

mostrarListado(cargarListado());
