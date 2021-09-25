//FORMULARIO

const dato_nombre_usuario= document.getElementById ("dato_nombre_usuario");
const dato_edad_usuario= document.getElementById ("dato_edad_usuario");
const dato_contrasena= document.getElementById ("dato_contrasena");
const form_nuevo_usuario =document.getElementById("form_nuevo_usuario");

const warnings =document.getElementById("warnings");


form_nuevo_usuario.addEventListener("submit", e=>{
    var edad = parseInt(dato_edad_usuario.value);    
    let es_edad_valida= validar_edad_usuario(edad);
    let es_contrasena_valida=validar_contrasena(dato_contrasena.value);
    let es_nombre_valido=validar_nombre_usuario(dato_nombre_usuario.value);
    return false;
})


function validar_nombre_usuario(nombre){

    var valida= nombre.match(/^[A-Za-z0-9_.]+$/)
   debugger
    if (valida!=null & contrasena.length>=6) {
        alert("nombre_usuario valido")
        return true;
    }else{
        alert("nombre_usuario no valido")
        return false;

    }
}





function validar_contrasena(contrasena){

    var valida= contrasena.match(/^[A-Za-z0-9]+$/)
   debugger
    if (valida!=null & contrasena.length>=6) {
        alert("contrasena valida")
        return true;
    }else{
        alert("contrasena no valida")
        return false;

    }
}

function validar_edad_usuario(edad){

    if(isNaN(edad)){ // edad no es un numero
        return false;

    }else{// edad es un numero porque isNaN salió falsa 
        if (edad > 0) { //edad es positiva
            if ((edad >= 13) & (edad < 110)) {
                alert("EDAD valida");
                return true; //edad esta en el rango
            } else {
                alert("EDAD NO valida");
                return false;// edad no esta en el rango
            }
        } else {
            alert("EDAD NO valida");
            return false;// edad  is negative
            
        }
    }
}



/*(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|
    \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
    \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:
    (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
            function limita(maximoCaracteres) {
                var elemento = document.getElementById("texto")
                if(elemento.value.length >= maximoCaracteres) {
                    console.log("los datos son mayores")
                    alert("Error")
                    return false;
                }
                else
                 {
                    console.log("los datos estan correctos..") 
                    alert("Valido")
                    return true;  
                 }
            }
    </script> 
</head>
<body>
    <form>
        <input type="text" name="txt1" id="texto" onkeypress="return limita(5);">
    </form>
    
</body>
</html>
*/