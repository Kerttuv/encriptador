function encriptar() {
    var cap1 = document.querySelector(".caption1");
    var cap2 = document.querySelector(".caption2");
    var imagen = document.getElementById("muneco");
    var salida = document.querySelector("#salida")
    var botonCopiar = document.querySelector("#copiar")
 
    //capturar el valor ingresado en el textarea 
    var texto = document.querySelector("#ingreso").value;
    var expReg = /[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÑÁÉÍÓÚÜÄËÏÖÜñáéíóúüäëïöü]/g;
    
    if (expReg.test(texto)) {
        salida.innerHTML = "";
        alert("El texto contiene mayúsculas o acentos.");
        console.log(expReg.test(texto));
        
    } else {
        //Remplazo de las vocales por las llaves de encriptación
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        //Inyecta el texto en el div salida
        salida.innerHTML = texto;

        // Oculta la imagen y los textos de la pantalla inicial
        cap1.style.display = "none";
        cap2.style.display = "none";
        imagen.style.display = "none";
   

        // Mostrar texto encriptado y botón de copiar
        salida.style.display = "block";
        botonCopiar.style.display = "block";
    };
   
} 

function desencriptar() {
    var cap1 = document.querySelector(".caption1");
    var cap2 = document.querySelector(".caption2");
    var imagen = document.getElementById("muneco");
    var salida = document.querySelector("#salida")
    var botonCopiar = document.querySelector("#copiar")
 
    //capturar el valor ingresado en el textarea 
    var texto = document.querySelector("#ingreso").value;
    var texto = document.querySelector("#ingreso").value;
    var expReg = /[A-ZHÑÁÉÍÓÚÜÄËÏÖÜñáéíóúüäëïöü]/g;
    
    if (expReg.test(texto)) {
        salida.innerHTML = "";
        alert("El texto contiene mayúsculas o acentos.");
        console.log(expReg.test(texto));
        return;
    } else {
        //Remplazo de las llaves de encriptación por las vocales
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        //Inyecta el texto en el div salida
        salida.innerHTML = texto;

        // Oculta la imagen y los textos de la pantalla inicial
        cap1.style.display = "none";
        cap2.style.display = "none";
        imagen.style.display = "none";
   

        // Mostrar texto encriptado y botón de copiar
        salida.style.display = "block";
        botonCopiar.style.display = "block";
    }   
   
}

function copiarTexto() {
    var text = document.querySelector("#salida").innerText;
    var input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    console.log("Texto copiado al portapapeles");
  }