const productos = [
    {
        id: 1,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://contentv2.tap-commerce.com//cover/large/9789878000107_1.jpg?id_com=717",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 2,
        nombre: "La felicidad",
        precio: 19.999,
        img: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/354/m_libros/portada_la-felicidad_gabriel-rolon_202311082001.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 3,
        nombre: "La secta",
        precio: 29.988,
        img: "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_980338.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 4,
        nombre: "Holly",
        precio: 30.999,
        img: "https://acdn.mitiendanube.com/stores/001/731/769/products/9789506446949-b00d1aab4bd69a5aeb16962764061404-640-0.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 5,
        nombre: "Violeta",
        precio: 31.899,
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/690814.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 6,
        nombre: "Nuestra parte de noche",
        precio: 33.499,
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/671549.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 7,
        nombre: "Los juegos del hambre 4",
        precio: 29.299,
        img: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/06/02/15910901797452.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 8,
        nombre: "Alas de sangre",
        precio: 29.999,
        img: "https://www.planetadelibros.com/usuaris/libros/fotos/385/original/portada_alas-de-sangre-empireo-1_rebecca-yarros_202309141523.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 9,
        nombre: "Diario de Greg 1",
        precio: 5.542,
        img: "https://www.penguinlibros.com/ar/1648023/diario-de-greg-1-un-pringao-total.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 10,
        nombre: "De profesión fantasma",
        precio: 4.777,
        img: "https://media.revistagq.com/photos/5d494fa86b1ecf0008a51b31/master/w_320%2Cc_limit/91S6-2ArfwL.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 11,
        nombre: "Diario de Greg 12",
        precio: 5.542,
        img: "https://http2.mlstatic.com/D_NQ_NP_991250-MLA49191619141_022022-O.webp",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 12,
        nombre: "El principito",
        precio: 8.888,
        img: "https://libry.cl/cdn/shop/products/9af2ec319859728376cd6a3190cf2d65.jpg?v=1666104281&width=480",
        tacho: "🗑️",
        cantidad: "1"
    },
];
let cartProducts = [];
let cartProductsLS = localStorage.getItem("cartProducts");
if (cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS);
} else {
    cartProducts = [];
}

let productContainer = document.getElementById("productos");

function renderProductos(productsAarray) {
    productsAarray.forEach((producto) => {
        const card = document.createElement("div");
        card.className = "estilo-card";
        card.innerHTML = `<img src="${producto.img}">
                         <h3 class="titulo">${producto.nombre}</h3>
                         <p class="precio">$${producto.precio}</p>
                         <button class="agregar" id="${producto.id}">Agregar</button>         
                        `;
        productContainer.appendChild(card);
    });
    addToCartButton();
}
renderProductos(productos);

function addToCartButton() {
    let addButton = document.querySelectorAll(".agregar");
    addButton.forEach((button) => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id;
            const selectedProduct = productos.find(
                (producto) => producto.id == productId
            );

           
            const existingProductIndex = cartProducts.findIndex(
                (producto) => producto.id == selectedProduct.id
            );

            if (existingProductIndex !== -1) {
               
                cartProducts[existingProductIndex].cantidad++;
            } else {
                selectedProduct.cantidad = 1; 
                cartProducts.push(selectedProduct);
            }

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));


        };
    });
}


Swal.fire({
    title: 'Bienvenido',
    text: 'Hola de nuevo manuel, listo para comprar?',
    icon: 'question',
    confirmButtonText: 'A comprar',
    iconHtml: ':)',
  })