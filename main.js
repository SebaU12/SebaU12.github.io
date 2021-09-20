var btn_info = document.getElementById("btn-info")
var btn_back = document.getElementById("btn-back")


var temp = `Información:
Nombre del contacto: Sebastián Lizárraga
Correo del contacto: sebastian.lizarraga@utec.edu.pe`

btn_info.onclick = function(e) {
    e.preventDefault();
    alert(temp);
}

btn_back.onclick = function(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}