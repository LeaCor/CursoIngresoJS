function Mostrar()
{
	var positivo=0;
	var negativo=0;
	var par;//no lo voy a usar
	var ceros=0;
	var contador=1;
	//declarar contadores y variables 
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorDeCeros=0;
	var contadorDePares=0;
	var promedioNegativo;
	var promedioPositivo;

	var diferPosNeg
	
	var respuesta="si";//variable para ingresar por primera vez al WHILE.
	
	while(respuesta=="si")
	//AL RESPONDER POR PROMPT con esta condicion, al ingresar cualquier cosa como respuesta no Ingresaria al WHILE y terminaria.
	//si fuera (respuesta!=no) puede ingresar cualquier cosa e ingresaria al WHILE.
	
	{
		numero=parseInt(prompt("Ingrese numero"));
		//WHILE(!(numero<=0 || numero>=0)) si no es un numero ingresa y pregunta de nuevo
		//numero=parseInt(prompt("Solo numeros"))
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
		/*if(numero%2==0)
		{
			contadorDePares=(contador++)+contadorDePares;
		}*/
		
		promedioPositivo=positivo/contadorPositivo;//hay que definirlo antes de entrar al while...
		//porque lo voy a usar fuera del While(alert, document.wrhite,ETC)
		
		promedioNegativo=negativo/contadorNegativo;
		
		diferPosNeg=positivo-negativo;

		respuesta=prompt("Otro numero? Contestar si o no");	
	}

document.write("La suma de positivos= "+positivo+
			   "La suma de negativos= "+negativo+
			   "La cantidad de positivos= "+contadorPositivo+
			   "La cantidad de negativos= "+contadorNegativo+
			   "La cantidad de ceros= "+contadorDeCeros+
			   "La cantidad de numeros pares= "+contadorDePares+
			   "El promedio de positivos= "+promedioPositivo+
			   "El promedio de negativos= "+promedioNegativo+
			   "Dieferencia entre positivos y negativos= "+diferPosNeg);

// me evitaria definir las variables promedio...y difer..
// haciendo la cuenta dentro del alert o document.write


}//FIN DE LA FUNCIÓN