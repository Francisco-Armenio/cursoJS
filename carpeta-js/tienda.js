const productos= [
    {
        id: 1,
        nombre: "Remera de boca",
        precio: 1000,
        img: "https://http2.mlstatic.com/D_NQ_NP_899654-MLA70862091276_082023-O.webp",
        
    },
    {
        id: 2,
        nombre: "Remera de All boys",
        precio: 300,
        img: "https://http2.mlstatic.com/D_NQ_NP_899654-MLA70862091276_082023-O.webp",
        
    },
    {
        id: 3,
        nombre: "Remera de Tigre",
        precio: 500,
        img: "https://http2.mlstatic.com/D_NQ_NP_899654-MLA70862091276_082023-O.webp",
        
    },
    {
        id: 4,
        nombre: "Remera de Belgrano",
        precio: 10000,
        img: "https://http2.mlstatic.com/D_NQ_NP_899654-MLA70862091276_082023-O.webp",
        
    },
    {
        id: 5,
        nombre: "Remera de Lanus",
        precio: 2500,
        img: "https://http2.mlstatic.com/D_NQ_NP_899654-MLA70862091276_082023-O.webp",
        
    },
]
let cartProducts = []
 let productContainer = document.getElementById("productos")

 function renderProductos(productsAarray) {
    productsAarray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =`<img src="${producto.img}">
                         <h3 class="titulo">${producto.nombre}</h3>
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