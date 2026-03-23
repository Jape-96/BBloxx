const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario.lenght == 0){
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('password').value;
    if (clave.lenght<3) {
        alert('La clave no es válida');
        return;
    }
    if (username.value==="abcdef" && password.value === "1234"){
        document.writeln("<center><h1>Inició sesión correctamente<br><br>Bienvenido");
        form.reset();

    } else {
        document.writeln("<center><h2>Usuario o contraseña incorrectos</h2><br><br>");
        password.value="";
        password.focus();
        document.writeln('<h3><a href="formulariojava.html">Regresar</a>');
    }
});