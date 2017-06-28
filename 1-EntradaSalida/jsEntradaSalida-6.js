/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var a;
var b;
a=document.getElementById("numeroUno").value;

b=document.getElementById("numeroDos").value;

a=parseInt(a);
b=parseInt(b);
c=a+b;

alert("El resultado es "+c);
}

