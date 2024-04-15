const productos= [
    {
        id: 1,
        nombre: "Remera de boca",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Remera de All boys",
        precio: 300
    },
    {
        id: 3,
        nombre: "Remera de Tigre",
        precio: 500
    },
    {
        id: 4,
        nombre: "Remera de Belgrano",
        precio: 10000
    },
    {
        id: 5,
        nombre: "Remera de Lanus",
        precio: 2500
    },
]
let cartProducts = []
 let productContainer = document.getElementById("productos")

 function renderProductos(productsAarray) {
    productsAarray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =`<h3 class="titulo">${producto.nombre}</h3>
                         <p class="precio">${producto.precio}</p>
                         <button class="agregar" id="${producto.id}">Agregar</button>         
                        `
        productContainer.appendChild(card)                
    })
    addToCartButton()
 }
 renderProductos(productos)

 function addToCartButton(){
    let addButton = document.querySelectorAll(".agregar")
    addButton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)

            cartProducts.push(selectedProduct)
            console.log(cartProducts)
        }
    })
 }