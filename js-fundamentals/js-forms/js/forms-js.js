function eventoForm(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if(email.value != "" && password.value != ""){
        alert("Su email es: " + email.value + " Su contraseña es: " + password.value);
    }else{
        alert("Los campos no pueden estar vacio.");
    }

}