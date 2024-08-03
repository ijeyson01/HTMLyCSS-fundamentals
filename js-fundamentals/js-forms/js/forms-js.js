const toastAlertaInicioSesion = document.getElementById('alertaInicioSesion')
const usuarios = [
    {
        "usuario": "Juan1234",
        "email": "eljuan2024@mail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "Jesus001",
        "email": "elyisus@mail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "DavidDev",
        "email": "ddev@mail.com",
        "password": "123456",
        "tipousuario": "USER"
    }
];


function eventoForm(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let usuarioEmail = usuarios.find( x => x.email == email.value);
    if(usuarioEmail == undefined){
        mostrarAlerta();
    } else {
        if(usuarioEmail['password'] == password.value) {
            localStorage.setItem('usuario', usuarioEmail['usuario']);
            localStorage.setItem('email', usuarioEmail['email']);
            localStorage.setItem('tipousuario', usuarioEmail['tipousuario']);
            window.location.href ='../../js-list-table/page/list-table.html';
        } else {
            mostrarAlerta();
        }
    }
    /*if(email.value != "" && password.value != ""){
       
    }else{
        alert("Los campos no pueden estar vacio.");
    }*/
}

function mostrarAlerta () {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastAlertaInicioSesion)
    toastBootstrap.show()
}
