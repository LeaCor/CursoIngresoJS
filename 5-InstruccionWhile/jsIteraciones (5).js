function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")// uso && porque son dos valores String 
//mientras no sea ni "f" ni "m" va ser TRUE y se ejecuta el bucle
//no va con || porque no es un rango como en el caso anterior
{
    sexo=prompt("ingrese f ó m.");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN