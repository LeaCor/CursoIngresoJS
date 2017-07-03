function Mostrar()
{
    var edad;
    var estadoCivil;

edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;
//aca se toma los tre valores posibles SOLTERO;CASADO;DIVORCIADO

edad=parseInt(edad);


var soltero=(estadoCivil=="Soltero");
var noSoltero=(estadoCivil!="Soltero");

//EN EL 'IF' PUEDO USAR ESTAS NUEVAS VARIABLES O LA VARIABLE 'ESTADOCIVIL'Y SUS COMPARACIONES.

    if(edad<18&&noSoltero)
    {

    }
    else
    {
        if(edad>=18&&soltero)
        {
            alert("Es soltero y no es menor");
        }
    }
}//FIN DE LA FUNCIÓN
/* if (edad>=18&&estadoCivil=="soltero")
{

}
tambien 

if(!(edad<18&&noSoltero))
{

}
else
{

}

*/