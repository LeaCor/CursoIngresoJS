/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var importe=parseInt(document.getElementById("importe").value);
    
    var descuento=importe*0.75;
    // tambien se puede calcular 
   
    // var descuento=importe*((importe*25)/100);
    document.getElementById("resultado").value=descuento;

}
