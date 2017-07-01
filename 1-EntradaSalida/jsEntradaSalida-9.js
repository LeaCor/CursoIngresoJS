/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var importe=document.getElementById("sueldo").value;
    var resultado;

    importe= parseInt(importe);

    resultado=importe*1.1//o 110% 

    document.getElementById("resultado").value=resultado;
    	
}
