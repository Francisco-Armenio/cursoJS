let cartContainer = document.getElementById("cart-section")
let divProductos = document.getElementById("cart-products")


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




const eliminarProductoCarrito = (id) => {
 
  const indice = cartProducts.findIndex((producto) => producto.id === id);

  
  if (indice !== -1) {
    const producto = cartProducts[indice];
    if (producto.cantidad > 1) {
      
      producto.cantidad--;
    } else {
 
      cartProducts.splice(indice, 1);
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    divProductos.innerHTML = "";
    renderCarrito(cartProducts, divProductos);
  }
};


document.addEventListener("click", (event) => {
  if (event.target.classList.contains("carrito-producto-eliminar")) {
    
    const idProducto = parseInt(event.target.parentNode.id);

    
    eliminarProductoCarrito(idProducto);
  }
});



let verCarrito = document.getElementById("ver-carrito");

let modal = document.getElementById("cart-section");
let buttonClose = document.getElementsByClassName("button-close")[0];


verCarrito.addEventListener("click", function () {

  let cartStorage = localStorage.getItem("cartProducts");
  cartStorage = JSON.parse(cartStorage);

  if (cartStorage && cartStorage.length > 0) {
    renderCarrito(cartStorage, divProductos);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay productos en el carrito.";
    cartContainer.appendChild(mensaje);

  }
});


verCarrito.onclick = function () {
  modal.style.display = "flex";
  overlay.style.display = "block";
}

buttonClose.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";

  const elementosCarrito = document.querySelectorAll("#cart-products > div:not(#cerrar)");


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

const vaciarCarrito = () => {
  cartProducts = []; 
  localStorage.removeItem("cartProducts"); 
  divProductos.innerHTML = ""; 
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