/*let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartProducts) {
    cartProducts.forEach(producto =>{
      const cart = document.createElement("div")
      cart.innerHTML = `<img src="${producto.img}">
                        <h3>${producto.nombre}</3>
                        <p>${producto.precio}</3>`
        cartContainer.appendChild(cart)                  
    })
}
renderCarrito(cartStorage)


// Obtener el modal y el botón de cierre
var modal = document.getElementById("cart-section");
var carrito = document.getElementById("ver-carrito");
var buttonClose = document.getElementsByClassName("button-close")[0];
var overlay = document.getElementById("overlay");

// Cuando el usuario haga clic en el botón, abrir el modal
carrito.onclick = function () {
    modal.style.display = "flex";
    overlay.style.display = "block";
} 
  

  // Cuando el usuario haga clic en el botón de cierre, cerrar el modal
buttonClose.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
*/


let cartContainer = document.getElementById("cart-section")
let divProductos = document.getElementById("cart-products")

// Definir función para renderizar el carrito
function renderCarrito(cartProducts, divProductos) {
  cartProducts.forEach(producto => {
    const cart = document.createElement("div");
    cart.className = "product"
    cart.innerHTML = `<img class="product-image" src="${producto.img}">
                        <h3 class="product-name">${producto.nombre}</h3>
                        <p class="product-price">${producto.precio}</p>
                        <h4>x ${producto.cantidad}</h4>
                        <button class="carrito-producto-eliminar" id="${producto.tacho}">🗑️</button>`;
    divProductos.appendChild(cart);
    const borrarProducto = cart.querySelector(".carrito-producto-eliminar");
    borrarProducto.addEventListener("click", () => {
      eliminarProductoCarrito(producto.id)
    })
  });
}



// Función para eliminar un producto del carrito
const eliminarProductoCarrito = (id) => {
  // Busca el índice del producto en el carrito
  const indice = cartProducts.findIndex((producto) => producto.id === id);

  // Si se encuentra el producto, verifica su cantidad
  if (indice !== -1) {
    const producto = cartProducts[indice];
    if (producto.cantidad > 1) {
      // Si la cantidad es mayor que 1, disminuye la cantidad en 1
      producto.cantidad--;
    } else {
      // Si la cantidad es 1, elimina completamente el producto del carrito
      cartProducts.splice(indice, 1);
    }

    // Actualiza el carrito en el Local Storage
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // Renderiza nuevamente el carrito para reflejar los cambios
    divProductos.innerHTML = "";
    renderCarrito(cartProducts, divProductos);
  }
};


// Escucha los clics en los botones de eliminación de productos
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("carrito-producto-eliminar")) {
    // Obtiene el ID del producto a eliminar
    const idProducto = parseInt(event.target.parentNode.id);

    // Llama a la función para eliminar el producto del carrito
    eliminarProductoCarrito(idProducto);
  }
});


// Obtener el botón
let verCarrito = document.getElementById("ver-carrito");

let modal = document.getElementById("cart-section");
let buttonClose = document.getElementsByClassName("button-close")[0];

// Agregar evento de clic al botón
verCarrito.addEventListener("click", function () {
  // Obtener los productos del carrito del Local Storage
  let cartStorage = localStorage.getItem("cartProducts");
  cartStorage = JSON.parse(cartStorage);

  // Limpiar el contenedor del carrito antes de volver a renderizar
  //cartContainer.innerHTML = "";

  // Renderizar el carrito solo si hay productos en el Local Storage
  if (cartStorage && cartStorage.length > 0) {
    renderCarrito(cartStorage, divProductos);
  } else {
    // Si no hay productos en el carrito, mostrar un mensaje al usuario
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay productos en el carrito.";
    cartContainer.appendChild(mensaje);

  }
});

// Cuando el usuario haga clic en el botón, abrir el modal
verCarrito.onclick = function () {
  modal.style.display = "flex";
  overlay.style.display = "block";
}

// Cuando el usuario haga clic en el botón de cierre, cerrar el modal
/*buttonClose.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    cartContainer.innerHTML = "";
}*/

// Agregar evento de clic al botón de cierre del modal
buttonClose.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
  // Obtener todos los elementos del carrito
  const elementosCarrito = document.querySelectorAll("#cart-products > div:not(#cerrar)");

  // Eliminar solo los elementos que fueron agregados dinámicamente desde Local Storage
  elementosCarrito.forEach(elemento => {
    elemento.remove();
  });
});


const sweetAlert = document.querySelector("#sweetAlert")

document.getElementById("sweetAlert").addEventListener("click", () => {
  vaciarCarrito();
  Swal.fire({
    title: 'Pago realizado',
    text: '¡Gracias por tu compra!',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});

// Función para borrar todos los productos del carrito
const vaciarCarrito = () => {
  cartProducts = []; // Vacía el array de productos del carrito
  localStorage.removeItem("cartProducts"); // Elimina los productos del carrito del Local Storage
  divProductos.innerHTML = ""; // Vacía el contenedor de productos en el carrito
};

const borrar = document.querySelector("#borrar")

borrar.addEventListener("click", () => {
  Swal.fire({
    title: 'Cuidado!!!',
    text: 'esta seguro que quiere borrar el contenido del carrito?',
    icon: 'question',
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  })
})