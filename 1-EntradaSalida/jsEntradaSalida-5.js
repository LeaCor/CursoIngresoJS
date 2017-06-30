/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	var nombre
    var edad
    nombre=document.getElementById("elNombre").value;
	edad=document.getElementById("laEdad").value;
    
    var texto="Usted se llama "+nombre+" y tiene "+edad+" años";
    alert(texto);
    /* se crea variable "texto" para su 
    reutilizacion parano escribir la oracion cada vez que lo necesite*/
}