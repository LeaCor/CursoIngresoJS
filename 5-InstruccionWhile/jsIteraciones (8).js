function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	
	while(respuesta!="no")// tambien "contador==0"
	{
		numero=parseInt(prompt("Ingrese numero:"));

		if(numero>=0)
		{
			positivo=numero+positivo
			
		}
		else
		{
			negativo=numero*negativo
			
		}

		respuesta=prompt("Seguimos?Contestar si o no");
		//si respuesta es NO se termina de ejecutar el bucle
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN