function Mostrar()
{
	var positivo=0;//acumulador
	var negativo=0;//acumulador
	var par=0;//no lo voy a usar
	var ceros=0;//no lo voy a usar
	var contador=1;//no lo voy a usar
	//declarar contadores y variables 
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorDeCeros=0;
	var contadorDePares=0;
	var promedioNegativo;
	var promedioPositivo;

	var diferPosNeg
	
	var respuesta=true;//variable para ingresar por primera vez al WHILE.
	//var respuesta="si; 
	
	while(respuesta==true)
	//AL RESPONDER POR PROMPT con esta condicion, al ingresar cualquier cosa como respuesta no Ingresaria al WHILE y terminaria.
	//si fuera (respuesta!=no) puede ingresar cualquier cosa e ingresaria al WHILE.
	//while(respuesta==si) 
	
	{
		numero=parseInt(prompt("Ingrese numero"));
		//WHILE(!(numero<=0 || numero>=0)) si no es un numero ingresa y pregunta de nuevo
		//numero=parseInt(prompt("Solo numeros"))
		
		while(isNaN(numero))//si numero es NaN este while es TRUE y te pide nuevamente un numero
		{
			numero=parseInt(prompt("TE DIJE NUMERO!!!"));

		}
		
		if(numero<0)
		{
			negativo=numero+negativo//tambien negativo+=numero(sumaria cada nuevo numero ingresado
			contadorNegativo++
			//TAMBIEN contadorNegativo=contador+contadorNegativo;
		}
		else if(numero>0)
		{
			positivo=numero+positivo;
			contadorPositivo++
			//contadorPositivo=contador+contadorPositivo;
		}
		else
		{
			contadorDeCeros++
			//contadorDeCeros=contador+contadorDeCeros;
			
		}
		if(numero%2==0)
		{
			contadorDePares++
		}
		
		promedioPositivo=positivo/contadorPositivo;//hay que definirlo antes de entrar al while...
		//porque lo voy a usar fuera del While(alert, document.wrhite,ETC)
		
		promedioNegativo=negativo/contadorNegativo;
		
		//diferPosNeg=positivo-negativo; //esto es la diferencia de los acumladores

		diferPosNeg=contadorNegativo-contadorPositivo
		if(diferPosNeg<0)
		{
			diferPosNeg=diferPosNeg*-1;
		}

		respuesta=confirm("Otro numero? Contestar si o no");// hacer con prompt si queres	
	}

document.write("La suma de positivos= "+positivo+
			   "<br>La suma de negativos= "+negativo+
			   "<br>La cantidad de positivos= "+contadorPositivo+
			   "<br>La cantidad de negativos= "+contadorNegativo+
			   "<br>La cantidad de ceros= "+contadorDeCeros+
			   "<br>La cantidad de numeros pares= "+contadorDePares+
			   "<br>El promedio de positivos= "+promedioPositivo+
			   "<br>El promedio de negativos= "+promedioNegativo+
	     	   "<br>Diferencia entre positivos y negativos= "+diferPosNeg);

// me evitaria definir las variables promedio...y difer..
// haciendo la cuenta dentro del alert o document.write


}//FIN DE LA FUNCIÓN