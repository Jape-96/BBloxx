const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario.lenght == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('password').value;
    if (clave.lenght < 3) {
        alert('La clave no es válida');
        return;
    }
       if  (true) {
        document.writeln("<center><h1><br><br>");
        form.reset();
        document.body.style.backgroundImage = "url('C:/Users/Usuario/Downloads/Open House/Bulldblox parte2.png')";
        document.body.style.backgroundSize = "adjust";
        document.body.style.backgroundRepeat = "no-repeat";
    }
});