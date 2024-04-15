//esta funcion es la que le dice que cuando se envíe el formulario, usando el
//windoow.location, me redirija a  inicio.html
function redirigir(){
    document.getElementById("formulario").submit();
    window.location.href = "tienda.html";
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

let intentos = 3;

function validarRespuesta() {
  let respuesta = document.getElementById("respuesta").value;
  let texto = document.getElementById("result");
  let correcto = "3";

  while (intentos > 0) {
    if (respuesta == correcto) {
      texto.textContent = "¡Correcto! ¡E.T. el Extraterrestre es la respuesta correcta!";
      texto.style.color = "green";
      break;
    } else {
      intentos--;
      if (intentos > 0) {
        texto.textContent = "Incorrecto. Te quedan " + intentos + " intentos.";
      } else {
        texto.textContent = "¡Agotaste tus intentos! La respuesta correcta era E.T. el Extraterrestre.";
        texto.style.color = "red";
      }
      break;
    }
  }
}

localStorage.setItem("respuesta correcta", "E.T el Extraterrestre")
localStorage.setItem("opcion correcta", 3)

let respuestaCorrecta = localStorage.getItem("respuesta correcta")
let opcionCorrecta = localStorage.getItem("opcion correcta")
console.log(respuestaCorrecta)
console.log(opcionCorrecta)