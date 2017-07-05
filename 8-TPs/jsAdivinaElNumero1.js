/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;//porque es el valor a comenzar 
var numUsuario;

function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*(100-1))+1;//(MAX-MIN]+MIN   MAX NO ESTA INCLUIDO PERO SI EL MINIMO.
	//Genero el número RANDOM entre 1 y 100
	console.log(numeroSecreto);
		//alert(numeroSecreto );
	

}

function verificar()
{
  contadorIntentos++;//suma 1 por cada intento
  //puede ser tambien ++contadorIntentos; contadorImntentos+=1;
  numUsuario=document.getElementById("numero").value;

  if(numeroSecreto==numUsuario)
  {
    alert("Gano en "+ contadorIntentos+" intentos");
  }
	else
 {
      if(numUsuario < numeroSecreto)
      {
      alert("te falta");
      }
      else
      {
        alert("te pasaste")
      }
 }
	
}