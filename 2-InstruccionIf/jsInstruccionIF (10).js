function Mostrar()
{
	var nota;

	nota= Math.floor(Math.random()*(10-1))+1;
	//Genero el número RANDOM entre 1 y 10 
	if(nota==9||nota==10)// tambien (nota>=9)
	{
		alert("Excelente= "+nota)
	}
	else//tambien else if (nota>=4)
		//y se puede aregar tanto else if() que queramos ej else if(nota>=2)
	{
		if(nota>=4)
		{
			alert("Aprobo= "+nota)
		}
		else
		{
			alert("Vamos, la proxima se puede= "+nota)
		}
	}
//esta es la estructura del IF si hay 3 condiciones
}//FIN DE LA FUNCIÓN