//FORMULARIO
//const dato_nombre_usuario= document.getElementById ("dato_nombre_usuario");
//const dato_edad_usuario= document.getElementById ("dato_edad_usuario");
//const dato_contrasena= document.getElementById ("dato_contrasena");
//const form_nuevo_usuario =document.getElementById("form_nuevo_usuario");

//const warnings =document.getElementById("warnings");
/*
form_nuevo_usuario.addEventListener("submit", e=>{
    var edad = parseInt(dato_edad_usuario.value);    
    let es_edad_valida= validar_edad_usuario(edad);
    let es_contrasena_valida=validar_contrasena(dato_contrasena.value);
    let es_nombre_valido=validar_nombre_usuario(dato_nombre_usuario.value);
    return false;
})*/


let registros=[];

function agregarRegistro(){

    
    let dato_nombre_usuario= document.getElementById ("dato_nombre_usuario");
    let dato_edad_usuario= document.getElementById ("dato_edad_usuario");
    let dato_contrasena= document.getElementById ("dato_contrasena");

    let nombreUsuarioValido=validar_nombre_usuario(dato_nombre_usuario.value);
    let edadValida=validar_edad_usuario(dato_edad_usuario.value);
    let contrasenaValida=validar_contrasena(dato_contrasena.value);

    if (nombreUsuarioValido && edadValida && contrasenaValida){
        //alert("Datos validos");

        let dato= {
            edad: dato_edad_usuario.value,
            usuario:dato_nombre_usuario.value,
            contrasena:dato_contrasena.value
        } 
        registros.push(dato);
       console.log(registros);
  //OrdenarArreglo(registros)

    } //else{
        
       // alert("Datos NO validos");}
}

function OrdenarArreglo(arreglo){

    arreglo.sort((a,b) => (a.edad > b.edad) ? 1 : ((b.edad > a.edad) ? -1 : 0))
    console.log(arreglo);
    return arreglo;
}

function validar_nombre_usuario(nombre){

    if (nombre!=undefined){
        
    let ultimaletra=nombre[nombre.length-1];
    
    var esMayuscula=nombre[0].match(/[A-Z]/)// si la primera letra es mayuscula
    var tieneEspaciosInicio=nombre[0].match(/\s/)// si el nombre tiene espacios
    var tieneEspaciosFinal=ultimaletra.match(/\s/)// si el nombre tiene espacios

    if (esMayuscula!=null && tieneEspaciosInicio==null && tieneEspaciosFinal==null ){
        //alert("empieza mayuscula y no tiene espacios AL PRINCIPIO NI AL FINAL" );
        return true;
        }else{
            //alert("tiene espacios y/o empieza minuscula");
            return false;
        }
   

    //let formatoCorrecto = str.charAt(0).toUpperCase()  == str.charAt(0)&& str.slice(-1) == ".";
    }else{
        return false;
    }
    
}






/*
function validar_nombre_usuario(nombre){
        
    let ultimaletra=nombre[nombre.length-1];
    var tieneEspaciosFinal=ultimaletra.match(/\s/)// si el nombre tiene espacios

         //The split() method splits a string into an array of substrings, and returns the new array.
         //If an empty string ("") is used as the separator, the string is split between each character
    const myArr = nombre.split(" ");
    let validado= 0;
    

    for (let i = 0; i < myArr.length; i++) {
            
            let esMayusculaPrimeraLetraPalabra_n= myArr[i][0].match(/[A-Z]/);
            let tieneEspaciosInicioPalabra=myArr[i][0].match(/\s/);

            if (esMayusculaPrimeraLetraPalabra_n!=null && tieneEspaciosInicioPalabra==null && tieneEspaciosFinal==null ){
               // alert("primera letra de la primera palabra es mayuscula no termina en espacio y no tiene espacios inicio"+  myArr[i]); 
                validado=validado+1;               
                }else{
                  //  alert("primera letra de la primera palabra es empieza minuscula+"+myArr[i]);
                    validado=0;
                }
        }
        if (validado==myArr.length){
            //alert("valido");
            return true;
            
        }else{
          //  alert("no valido");
            return false;
        }
        
    //let formatoCorrecto = str.charAt(0).toUpperCase()  == str.charAt(0)&& str.slice(-1) == ".";

    
}*/


function validar_contrasena(contrasena){
    
    var valida= contrasena.match(/^[A-Za-z0-9]+$/) 
    if (valida!=undefined && contrasena!=undefined && contrasena.length>=6) {
      //  alert("contrasena valida")
        
        return true;
        
    }else{
        //alert("contrasena no valida")
        return false;

    }
}

function validar_edad_usuario(edad){

    if(isNaN(edad)){ // edad no es un numero
        return false;

    }else{// edad es un numero porque isNaN salió falsa 
        if (edad > 0) { //edad es positiva
            if ((edad >= 13) && (edad < 110)) {
              //  alert("EDAD valida");
            
                return true; //edad esta en el rango
            } else {
                //alert("EDAD NO valida");
                return false;// edad no esta en el rango
            }
        } else {
        //    alert("EDAD NO valida");
            return false;// edad  is negative
            
        }
    }
}
module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.validar_edad_usuario=validar_edad_usuario;


