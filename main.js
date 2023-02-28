var Nombre_alumnos=[]
function Enviar(){
    var Nombre1=document.getElementById("nombre1").value
    var Nombre2=document.getElementById("nombre2").value
    var Nombre3=document.getElementById("nombre3").value
    var Nombre4=document.getElementById("nombre4").value

    Nombre_alumnos.push(Nombre1)
    Nombre_alumnos.push(Nombre2)
    Nombre_alumnos.push(Nombre3)
    Nombre_alumnos.push(Nombre4)

    document.getElementById("Ver_nombre").innerHTML=Nombre_alumnos

    document.getElementById("Boton_enviar").style.display="None"
    document.getElementById("Boton_ordenar").style.display="inline-block"
}

function Ordenar(){
    Nombre_alumnos.sort()
    document.getElementById("Ver_nombre").innerHTML=Nombre_alumnos;
}