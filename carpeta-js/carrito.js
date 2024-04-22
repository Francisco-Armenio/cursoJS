let cartStorage = localStorage.getItem("cartProducts")
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