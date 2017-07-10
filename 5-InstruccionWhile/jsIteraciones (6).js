function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
	{
		numero=parseInt(prompt("Ingresa numero:"));
		console.log(numero)

		while(isNaN(numero))//si numero es NaN este while es TRUE y te pide nuevamente un numero
		{
			numero=parseInt(prompt("TE DIJE NUMERO!!!"));

		}
		acumulador=numero+acumulador
		
		contador++
		

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN