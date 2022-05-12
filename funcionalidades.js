let contador=0;

function validarRegistro(){
    const user=document.getElementById('usuario').value;
    const password1=document.getElementById('contrasenia').value;
    const password2=document.getElementById('contrasenia2').value;
    if (password1==password2){
        alert("El registro ha sido existoso. Su usuario es "+user);
    }else{
        alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
    }
    
}

function agregarACarrito(){
    contador++;
    const numerito=document.getElementById('numbCart');
    numerito.innerText=contador;
}

