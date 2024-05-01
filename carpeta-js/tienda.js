const productos = [
    {
        id: 1,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
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
        nombre: "Donde esta Wally?",
        precio: 24.799,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbe0IdGktLdMTYExuGTCdIIbaf5C5XAR0wXyTjlcGRQ&s",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 4,
        nombre: "Holly",
        precio: 30.999,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5dRrVdMSVOzUcHkMcRVNysAsmZwAnWItpzNtA0oEPA&s",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 5,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 6,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 7,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 8,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 9,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 10,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 11,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
        tacho: "🗑️",
        cantidad: "1"
    },
    {
        id: 12,
        nombre: "Harry Potter 1",
        precio: 21.999,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/5f/e65f54742ad7bbc41903d17f75b77d78.jpg",
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
            selectedProduct.cantidad++;
            cartProducts.push(selectedProduct);
            console.log(cartProducts);

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        };
    });
}


/*Swal.fire({
    title: 'Bienvenido',
    text: 'Hola de nuevo manuel, listo para comprar?',
    icon: 'question',
    confirmButtonText: 'A comprar',
    iconHtml: ':)',
  })*/