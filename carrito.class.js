class Carrito{

    constructor(productos) {
        this.productos= productos
    }

agregarProducto(producto) {
    const esta = this.productos.find(element=>producto.id===element.id);

    if(esta) {
        esta.cantidad = producto.cantidad+esta.cantidad
    }
    else {
    this.productos.push(producto);
    }
}

calcularTotal() {
    let total = 0;
    for(let i=0;i<this.productos.length;i++) {
        total+=this.productos[i].price*this.productos[i].cantidad;
    }
    return total;
}

vaciarCarrito() {
    this.productos=[];
}

borrarProducto(producto) {
    const pABorrar = this.productos.find(element=>producto.id===element.id);
    console.log("PRODUCTO A BORRAR");
    console.log(pABorrar);

    const index = this.productos.indexOf(pABorrar);

    this.productos.splice(index,1);
}

confirmarPedido() {

nombre = document.getElementById("nombreYApellido").value
localStorage.setItem("Nombre y apellido:", nombre);

while (nombre === ''){
    swal ("Ingrese su nombre y apellido.");
    return (nombre);
    }

    const miPromesa = (nombre) => new Promise ((resolve, reject) => {
        if (nombre === true) {
            resolve("Éxito")
        }
        else {
            reject ("Falló")
        }
    })

console.log("RESULTADO EXITOSO", miPromesa(true));
console.log("RESULTADO FALLIDO", miPromesa(false));

mesa = document.getElementById("numeroMesa").value
localStorage.setItem("Número de mesa:", mesa);

while (mesa >= 11) {
    swal ("Ingrese su número de mesa correcto.")
    return (mesa)
    }

while (mesa === "") {
    swal ("Ingrese su número de mesa.")
    return (mesa)
    }

while (mesa < 1) {
    swal ("Ingrese su número de mesa correcto.")
    return (mesa)
    }
    

document.getElementById("confirmarPedido").disabled = true

Toastify({
text: "Pedido confirmado",
duration: 3000
}).showToast();

registrarDatos();
cargarApi();
}

}
