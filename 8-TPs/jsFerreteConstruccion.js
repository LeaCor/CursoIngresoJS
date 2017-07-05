/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;

var resultado;
function Rectangulo () 
{
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    resultado=((2*largo)+(2*ancho))*3;
    alert("Deberias comprar: "+resultado+" de alambre")

}
function Circulo () 
{
    radio=parseInt(document.getElementById("Radio").value);
	
    resultado=(2*(Math.PI)*radio)*3;

    alert("Deberias comprar: "+resultado+" de alambre");
    
}
function Materiales () 
{
    var cal;
    var cemento;
    var supeficie;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
	
    superficie=largo*ancho;
    cal=superficie*3;
    cemento=superficie*2;
        
    alert("Necesitas: "+cal+" bolsas de cal y "+cemento+" colsas de cemento");
}