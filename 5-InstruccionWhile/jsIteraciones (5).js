function Mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(sexo!="f" && sexo!="m")// uso && porque son dos valores String 
    //mientras no sea ni "f" ni "m" va ser TRUE y se ejecuta el bucle
    //SE PUEDE AGREGAR "sexo!="F" && sexo!="M" (Mayusculas)
    //OTRA FORMA:   
    //WHILE (!(sexo=="f"||sexo=="m"));
    //Si ingreso una caracter diferente es False y luego TRUE por el signo de admiracion "!"
    {
        sexo=prompt("ingrese f ó m.");
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN