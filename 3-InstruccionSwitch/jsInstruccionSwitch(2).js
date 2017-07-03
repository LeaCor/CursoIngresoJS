function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);//puede o no estar

switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    
    case "Enero"://pasa al proximo case. todas contienen el mismo alert("") 
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("falta para el invierno");
        break;

    default:
        alert("Ya paso el invierno");
        break;
        
}

}//FIN DE LA FUNCIÓN