//DOM , EVENTOS Y COMPLEMENTARIO

class Producto {
  constructor(marca, nombre, precio) {
      this.marca = marca;
      this.nombre = nombre.toUpperCase();
      this.precio = precio;
  }
}

class Persona {
  constructor(nombre) {
      this.nombre = nombre;
  }

  agregarProducto(producto) {
      if (this.productos.find(item => item.marca == producto.marca)) {
          return 'Producto ya existe';
      } else {
          this.productos.push(producto);
          return 'Producto agregado';
      }
  }

  actualizarDeposito() {
      localStorage.setItem(`${this.nombre}`, JSON.stringify(this.productos));
  }

  cargarDeposito() {
      const deposito = JSON.parse(localStorage.getItem(`${this.nombre}`));
      
      if (deposito) {
          this.productos = deposito;
      } else {
          this.productos = [];
      }
  }

  mostrarProductos() {
      const section = document.createElement("section");
      const nombrePersona = document.createElement("h1");
      nombrePersona.textContent = `Bienvenid@ a ${this.nombre}`;
      section.appendChild(nombrePersona);

      this.productos.map(elemento => {
          section.appendChild(this.armarTarjeta(elemento));
      });

      document.body.appendChild(section);
  }
  
  armarTarjeta(elemento) {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      const nombreProducto = document.createElement("h3");
      nombreProducto.textContent = `${elemento.nombre}`
      tarjeta.appendChild(nombreProducto);

      const marca = document.createElement("div");
      marca.textContent = `Marca: ${elemento.marca}`;
      tarjeta.appendChild(marca);

      const precio = document.createElement("div");
      precio.textContent = `Precio: ${elemento.precio}`;
      
    
      elemento.precio > 8000 ? precio.classList.add("uno") : precio.classList.add("dos");

      tarjeta.appendChild(precio);
      return tarjeta;
  }
}

const consultarIngresoDeProdcuto = () => prompt('¿Desea ingresar un producto? Y/N ').toUpperCase() === 'Y';

const cargarProductos = (Persona) => {
  while (consultarIngresoDeProdcuto()) {
      const producto = new Producto(prompt('Marca'), prompt('Nombre del producto'), parseFloat(prompt('Precio')));
      alert(Persona.agregarProducto(producto));
  }
}

function iniciarPrograma() {
  const persona = new Persona(prompt("INGRESE SU NOMBRE"));
  persona.cargarDeposito();
  cargarProductos(persona);
  persona.actualizarDeposito();
  persona.mostrarProductos();
}

iniciarPrograma();


//evento para dark mode

let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", cambiarTema);

//eventos para guardar un formulario

let formulario = document.getElementById("formularioProductos");
formulario.addEventListener("submit", guardarProducto);

//evento para mostar menu de productos
let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario)

//funcio para cambiar tema

function cambiarTema() {
    document.body.classList.toggle("darkMode");
}

//funcion para cargar listado del local o iniciarlo si no hay

function cargarListado() {
    let listadoProductos = JSON.parse(localStorage.getItem("listadoProductos"));
    if(listadoProductos == null) {
        return [];
    }
    return listadoProductos;
}

//funcion para guardar en localStorage
function guardarListado(listadoProductos) {
    localStorage.setItem("listadoProductos", JSON.stringify(listadoProductos));
    mostrarListado(listadoProductos);
}

//funcion para guardar

function guardarProducto(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let marca = document.querySelector("#marca").value;
    let precio = document.querySelector("#precio").value;

    let listadoProductos = cargarProductos();
    listadoProductos.push(new Producto(nombre, marca, precio));

    guardarListado(listadoProductos);
    document.getElementById('formularioProductos').reset();
}

//funcion para mostrar menu de productos
function mostrarFormulario() {
    document.getElementById("menuAgregar").classList.toggle("oculto");
}

//funcion para armar una tarjeta 
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = `${elemento.nombre}`
    tarjeta.appendChild(nombreProducto);

    const marca = document.createElement("div");
    marca.textContent = `marca: ${elemento.marca}`;
    tarjeta.appendChild(marca);
    return tarjeta;
}

function mostrarListado(listadoProductos) {
    let listado = document.getElementById("listado");
    listado.textContent = "";
    listadoProductos.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}


mostrarListado(cargarProductos());
