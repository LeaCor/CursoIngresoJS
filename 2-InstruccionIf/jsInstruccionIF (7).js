function Mostrar()
{
    var edad;
    var estadoCivil;

    edad=document.getElementById("edad").value;
    //tomo la edad
    edad=parseInt(edad);
    estadoCivil=document.getElementById("estadoCivil").value;
    

    if(edad<=17&&estadoCivil!="Soltero")
        {
            alert("Es muy pequeño para NO ser soltero")
        }
    
}
