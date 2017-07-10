function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;//para que en la multiplicacion no sea CERO
	var contadorPositivo=0;
	var contadorNegativo=0;
	var respuesta='si';
	
	while(respuesta!="no")// tambien "contador==0"
	{
		numero=parseInt(prompt("Ingrese numero:"));

		if(numero>=0)//se incluye el cero porque se suma y evitamos que entre en negativo que multiplica y seria un error.
		{
			positivo=numero+positivo//seria como el acumulador de otros casos
			contadorPositivo++
			//contadorPositivo=contador++ 
		}
		else
		{
			negativo=numero*negativo
			contadorNegativo++//Forma correcta
			//contadorNegativo=contador++ ASI NO porque se distribuye mal al aumentar 1 cada vez citado  el valor de la variable "contador" en el IF y en el ELSE
		}

		respuesta=prompt("Seguimos?Contestar si o no");
		//si respuesta es NO se termina de ejecutar el bucle
		//tambien se puede hacer con "confirm" (tambien hay que cambiar la variable "respuesta" con TRUE)
	}


document.getElementById('suma').value="La suma de estos "+contadorPositivo+" numeros es "+positivo;
document.getElementById('producto').value="El producto de estos "+contadorNegativo+" numeros es "+negativo;

}//FIN DE LA FUNCIÓN