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
                        <span>${producto.cantidad}</span>
                        <button class="carrito-producto-eliminar" id="${producto.tacho}">🗑️</button>`;
      divProductos.appendChild(cart);
      const borrarProducto= cart.querySelector (".carrito-producto-eliminar");
      borrarProducto.addEventListener("click", () =>{
        borrarProductoCarrito(producto.id)

      })
    });
  }
    
  


  // Obtener el botón
  let verCarrito = document.getElementById("ver-carrito");

  let modal = document.getElementById("cart-section");
  let buttonClose = document.getElementsByClassName("button-close")[0];
  
  // Agregar evento de clic al botón
  verCarrito.addEventListener("click", function() {
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
buttonClose.addEventListener("click", function() {
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

  sweetAlert.addEventListener("click", () => { 
    Swal.fire({
      title: 'Compra realizada!!!!',
      text: 'gracias por comprar',
      icon: 'success',
      confirmButtonText: 'listo',
    })   
  })

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

   const borrarProductoCarrito = (id) => {
    const foundId = cartProducts.findIndex((elemento) => elemento.id === id);
    console.log(foundId);
    cartProducts.splice(foundId, 1);
};