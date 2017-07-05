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
var contadorIntentos=0;//porque es el valor a que tomara para el primer alert si acierta. 
var numUsuario;

function comenzar()
{
  numeroSecreto=Math.floor((Math.random()*100)+1);
	//1ero multiplica por 109 el numero generado por random.Luego le suma uno. Por ultimo redondea
	console.log(numeroSecreto);//Aca lo muestra. Para el juego no mostrarlo haciendolo comentario
		//alert(numeroSecreto );
	

}

function verificar()
{
  contadorIntentos++;//suma 1 por cada intento.
  //Debe escribirse antes de ingresar por primera vez IF asi suma 1 al contador
  //puede ser tambien ++contadorIntentos; contadorImntentos+=1
  
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
 /*contadorIntentos++;  se ubicaa aca
 si antes de ingresar a la funcion 
 la variable contadorIntentos=1;
 */
}