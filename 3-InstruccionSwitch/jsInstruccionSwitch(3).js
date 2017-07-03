function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        alert("Este mes no tiene 29");
        break;
    default:
        alert("Este mes tiene 30 a mas dias");
        break;
}        
	
	


}//FIN DE LA FUNCIÓN