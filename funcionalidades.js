let contador=0;
let contadorCiruela=0;
let contadorVainilla=0;
let contadorArandano=0;
let contadorFresa=0;
let contadorPistacho=0;
let contadorLimon=0;

function validarRegistro(){
    //si las contraseñas son iguales entonces se registra correctamente
    //se necesita conectar con base de datos para ver que el usuario aun no exista
    const user=document.getElementById('usuario').value;
    const password1=document.getElementById('contrasenia').value;
    const password2=document.getElementById('contrasenia2').value;
    if (password1==password2){
        alert("El registro ha sido existoso. Su usuario es "+user);
    }else{
        alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
    }
    
}

function agregarACarrito(helado){
    //agrega contador encima del carrito cuando se apreta boton de agregar a carrito
    contador++;
    const numerito=document.getElementById('numbCart');
    numerito.innerText=contador;

    //lleva la cuenta de que tipo de helado se esta agregando al carrito
    this.nombreHelado=helado;

    if(nombreHelado=='ciruela'){
        contadorCiruela++;
    }else if(nombreHelado=='pistacho'){
        contadorPistacho++;
    }else if(nombreHelado=='vainilla'){
       contadorVainilla++;
    }else if(nombreHelado=='fresa'){
        contadorFresa++;
    }else if(nombreHelado=='arandano'){
        contadorArandano++;
    }else if(nombreHelado=='limon'){
        contadorLimon++;
    }
   
}

function validarUsuario(){
    const user=document.getElementById('usuarioLogin').value;
    const password=document.getElementById('contraseniaLogin').value;
//se necesita conectar a base de datos para saber que el usuario con su contraseña existen


//luego de haber verificado de que exista en base de datos
if(user!="" && password!=""){
alert("Ha iniciado sesión correctamente.");
}


}

function mostrarCarrito(){

    if(contadorCiruela>0){
       //mostrar la foto del helado de ciruela con su respectiva cantidad e iconos de + y -
       alert("Hay "+contadorCiruela+" helados de ciruela.");
    }

    if(contadorVainilla>0){
         //mostrar la foto del helado de vainilla con su respectiva cantidad e iconos de + y -
    }

    if(contadorArandano>0){

         //mostrar la foto del helado de arandano con su respectiva cantidad e iconos de + y -
    }


    if(contadorLimon>0){
         //mostrar la foto del helado de limon con su respectiva cantidad e iconos de + y -
    }

    if(contadorFresa>0){
         //mostrar la foto del helado de fresa con su respectiva cantidad e iconos de + y -
    }

    if(contadorPistacho>0){
         //mostrar la foto del helado de pistacho con su respectiva cantidad e iconos de + y -
    }
}