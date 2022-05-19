const textoIngresado = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");




function btnEncriptar (){ 
        const texto = encriptar(textoIngresado.value);
        mensaje.value = texto;
        cambiarEstado("encriptado");
    }




function encriptar(stringAEncriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringAEncriptar = stringAEncriptar.toLowerCase();

    for (let i = 0; i < matriz.length; i++ ){
      if(stringAEncriptar.includes(matriz[i][0])){
          stringAEncriptar = stringAEncriptar.replaceAll(matriz[i][0], matriz[i][1]);
      }
    }

    return stringAEncriptar;
}



function btnDesencriptar(){
        const texto = desencriptar(textoIngresado.value);
        mensaje.value = texto;
        cambiarEstado("desencriptado");
    }





function desencriptar(stringADesencriptar){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringADesencriptar = stringADesencriptar.toLowerCase();

   
    for (let i = 0; i < matriz.length; i++ ){
        if(stringADesencriptar.includes(matriz[i][1])){
            stringADesencriptar = stringADesencriptar.replaceAll(matriz[i][1], matriz[i][0]);
        }
      }
      return stringADesencriptar;
}



function copy(){
    let texto = document.getElementById("mensaje");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    let boton = document.getElementById("btnCopy");

    let timer = setTimeout(function (){
        boton.innerHTML = "Copiado"
    }, 0, 2000);

    let timer2 = setTimeout(function(){
        boton.innerHTML = "Copiar"
    },2000,3000); 
}



function cambiarEstado(estado){
    let indicador = document.getElementById("estado");
    let imagen = document.getElementById("estadoImagen");

    if (estado == "encriptado"){
        indicador.innerHTML = "Texto encriptado";
        imagen.src = "images/candado-cerrado.png";
    } 
    
    if (estado == "desencriptado"){
        indicador.innerHTML = "Texto desencriptado";
        imagen.src = "images/candado-abierto.png";
    }
    
}


