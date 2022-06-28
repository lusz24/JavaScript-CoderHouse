let mesa = 0
let nombre = ""
let total = 0
const tituloH2 = document.createElement("h2")

const miCarrito = new Carrito([]);

const date = () => new Date();
console.log(date());

mostrarProductos();
mostrarCarrito();
mostrarTotalCarrito();
programarBotonesCarrito();

let nombreYApellido2 = localStorage.getItem("Nombre y apellido:");
document.getElementById("nombreYApellido").value = nombreYApellido2; 

let numeroMesa2 = localStorage.getItem("Número de mesa:");
document.getElementById("numeroMesa").value = numeroMesa2;

function mostrarProductos() {
    productos.forEach(element => {
        const div = document.createElement("th");
        div.innerHTML=`
        <img src='${element.image}' width="200px"/><br/>
        ${element.title}<br/>
        ${element.descripcion}<br/>
        $${element.price}<br/>
        `
        const btn = document.createElement('button')
        btn.innerText="Agregar"
        btn.addEventListener('click', ()=>{
        const productoParaCarrito = {
            ...element, 
            cantidad:1,
    }

    miCarrito.agregarProducto(productoParaCarrito);
    mostrarCarrito();
    console.log("Carrito", miCarrito);
    })

    div.appendChild(btn);
    document.body.appendChild(div);
    });
}

function mostrarCarrito() {
    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML="";
    miCarrito.productos.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML=`
        <img src='${element.image}' width="20px"/><br/>
        ${element.title}<br/>
        $${element.price*element.cantidad}<br/>
        Cantidad: ${element.cantidad}
        `
    const btnBorrar = document.createElement('button')
    btnBorrar.innerHTML="Eliminar pedido"
    btnBorrar.addEventListener('click', () => {
        borrarProducto(element);
        })
    div.appendChild(btnBorrar);
    divCarrito.appendChild(div)
    })
    mostrarTotalCarrito();
}

function mostrarTotalCarrito() {
    const divTotal = document.getElementById("totalCarrito");
    divTotal.innerHTML="";
    total = miCarrito.calcularTotal();
    divTotal.innerHTML="TOTAL: $"+total.toFixed(2);
}

function programarBotonesCarrito() {
    programarVaciarCarrito();
    programarConfirmarPedido();
}

function programarConfirmarPedido() {
    const btn2 = document.getElementById("confirmarPedido")
    btn2.addEventListener("click", () => {
        miCarrito.confirmarPedido();
        })
}


function registrarDatos() {
    tituloH2.innerHTML = `<b> Estamos preparando su pedido. Pronto lo acercaremos a su mesa.</b><br/>`
    document.body.appendChild(tituloH2)

    console.log("Nombre del comensal: " + nombre)
    console.log("Número de mesa: " + mesa)
    console.log("Valor total: $" + total)
}

function borrarDatos() {
    document.body.appendChild(tituloH2).remove();
    document.getElementById("myForm").reset();
}

function programarVaciarCarrito() {
    const btn = document.getElementById('vaciarCarrito')
    btn.addEventListener('click', ()=>{
        miCarrito.vaciarCarrito();
        mostrarCarrito();
        document.getElementById("myForm").reset();
        document.getElementById("confirmarPedido").disabled = false
        console.clear();
        borrarDatos();

        Toastify({
        text: "Pedido borrado",
        duration: 3000
        }).showToast();
        })
}

function borrarProducto(producto) {
    miCarrito.borrarProducto(producto);
    mostrarCarrito();
}

function cargarApi() {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => console.log(json))
}