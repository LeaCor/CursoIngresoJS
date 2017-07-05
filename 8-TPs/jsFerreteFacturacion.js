/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1
var precio2
var precio3//se declara desde afuera para que cada funcion pueda acceder a esas variables
//Si la declaro dentro de una funcion no puede ser accedida por otra funcion

var resultado

function Sumar () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    resultado=precio1+precio2+precio3;
    alert("La suma da como resultado: "+resultado);
	
}
function Promedio () 
{
	precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    resultado=(precio1+precio2+precio3)/3;
    alert("El promedio da como resultado: "+resultado);
	
}
function PrecioFinal () 
{
	precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    resultado=(precio1+precio2+precio3)*1.21;
    alert("El precio final es: "+resultado);
	
}