function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)

{
    case "Enero":
        alert("Que comienzes bien el año");

        break;
    
    case "Marzo":
        alert("se vienen las clases");

        break;

    case "Julio":
        alert("Llegaron las vacaciones!!");

        break;

    case "Diciembre":
        alert("FIN DE AÑOOO")

        break;
    
    default:
        alert("No es un mes interesante")

        break;
    
}

}
/* Se puede hacer
if (mes=="Enero") {
    alert("")
}
else if(mes=="Marzo")
{
    alert("")
}    

else if(mes=="Julio")
{
    alert("")
}    
else if(mes=="Diciembre")
{
    alert("")
}
}



}//FIN DE LA FUNCIÓN*/