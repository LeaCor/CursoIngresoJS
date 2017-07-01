function Mostrar()
{ 
    var edad;

    edad=document.getElementById("edad").value;

    if(edad>=18)
    {
        alert("Sos mayor de edad, ACCESO PERMITIDO");

    }
    else
    {
        alert("Sos menor de edad, ACCESO DENEGADO");
  
    }

}//FIN DE LA FUNCIÓN