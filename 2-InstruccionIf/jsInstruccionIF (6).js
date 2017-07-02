function Mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad>=18)

    {
        alert("Eres mayor de edad")
    }

    else{
        if(edad>=13&&edad<=17)
        {
            alert("Eres adolescente")
        }
        else
        {
            alert("Eres un niño")
        }
    }
    
}//FIN DE LA FUNCIÓN