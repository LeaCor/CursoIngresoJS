function Mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(!(edad>13&&edad<=17))//Siempre es TRUE todo aquellos que NO (!) esten entre 14 y 17.

    {

        alert("NO sos adolescente");

    }
    

}//FIN DE LA FUNCIÓN