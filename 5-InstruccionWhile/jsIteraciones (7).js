function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta!="no")//No tiene limite. Tambien puede ser "contador==0"
	{
		numero=parseInt(prompt("Ingresa numero:"));
		//fijarse que en el ejercicio anterior  definí la variable "numero" por fuera del WHILE.
		acumulador=numero+acumulador
		
		contador++//puede ponerse como no ya que cambia la condicion
		
		respuesta=prompt("Seguimos?Contestar si o no")
		
		/*si fuera WHILE(respuesta==si)
		entonces al final de este bucle debo crear
		IF(RESPUESTA!=SI)
		{
			BREAK;
		}
		*/
		
		//MIRAR!!! QUE OSCAR LO HIZO CON respuesta="CONFIRM"
		

	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN