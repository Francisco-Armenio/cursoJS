//esta funcion es la que le dice que cuando se envíe el formulario, usando el
//windoow.location, me redirija a  inicio.html
function redirigir(){
    document.getElementById("formulario").submit();
    window.location.href = "carpeta-html/tienda.html";
}

//esta funcion compara los datos ingresados con los correctos
function validarDatos(){
    //estos son los datos
    let nombreDeUsuario = "manuel";
    let password = "2004";
    //estos son los datos ingresados. el getElementById guarda el dato ingresado en una variable.
    let usuarioIngresado = document.getElementById ("usuario").value;
    let passwordIngresada = document.getElementById ("password").value;

    if (usuarioIngresado == nombreDeUsuario && passwordIngresada == password) {
        //si los datos ingresados coinciden con los correctos, me redirige a inicio.html
        redirigir()
        
    }
    else{
        //sino, usuario incorrecto
        alert("Usuario incorrecto");
    } 
}

