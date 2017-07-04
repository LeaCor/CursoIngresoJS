function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);

	while(numero<0||numero>9)
	{
		numero=prompt("ingrese un número entre 0 y 9 inclusive");
	}
	document.getElementById("Numero").value=numero;
	

}//FIN DE LA FUNCIÓN