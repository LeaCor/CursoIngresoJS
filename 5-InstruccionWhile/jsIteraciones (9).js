function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var key=true;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{	numero=prompt("Ingresar un numero:")
		numero=parseInt(numero);

		if(key)//TRUE por unica y primera vez
		{
			maximo=numero;
			minimo=numero;
			//O TAMBIEN max=min=numero; maximo y minimo (por primera vez) valen lo mismo.
			key=false;//cambiado para no volver a entrar a este IF.

		}
		//lUEGO SE COMPARA. Por primera vez no hay cambios ya que no se da ninguna de las siguientes IF (condiciones).

		if(numero<minimo) 
		{
			minimo=numero
		}
		if(numero>maximo)
		{
			maximo=numero;
		}


		respuesta=prompt("Mas numeros?Contestar si o no");
	}

	document.getElementById("maximo").value="El numero maximo es: "+maximo;
	document.getElementById("minimo").value="El numero minimo es: "+minimo;



}//FIN DE LA FUNCIÓN