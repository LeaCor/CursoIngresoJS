/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
    var marca;
    var precioFinal=35;
    var iibb=0.10;
    
    cantidad=document.getElementById("Cantidad").value;
    cantidad=parseInt(cantidad);

    marca=document.getElementById("Marca").value;

    //SI HACEMOS POR SWITCH ES POR Marca con if incorporado en cada marca con sus respectivas cantidades pedidas.
    //SI es por IF es por cantidad

    if(cantidad>=6)
    {
        precioFinal=(precioFinal*0.50)*cantidad;
        
    }
    else if(cantidad==5)
    {
        if(marca=="ArgentinaLuz")
        {
            precioFinal=(precioFinal*0.60)*cantidad;
        }
        else
        {
            precioFinal=(precioFinal*0.70)*cantidad;
        }
    }
    else if(cantidad==4)
    {
        if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
        {
            precioFinal=(precioFinal*0.75)*cantidad;
        }
        else
        {
            precioFinal=(precioFinal*0.80)*cantidad;
        }

    }
    else if(cantidad==3)
    {
        if(marca=="ArgentinaLuz")
        {
            precioFinal=(precioFinal*0.85)*cantidad;
        }
        else if(marca=="FelipeLamparas")
        {
            precioFinal=(precioFinal*0.90)*cantidad;
        }
        else
        {
            precioFinal=(precioFinal*0.95)*cantidad;
        }
    }
    else if(cantidad<3)
    {
        precioFinal=precioFinal*cantidad;
    }

    if(precioFinal>=120)
    {
        iibb=precioFinal*iibb;
        precioFinal=iibb+precioFinal
        
        alert("Usted esta pagando $"+iibb+" de Ingresos Brutos");
    }


    document.getElementById("precioDescuento").value=precioFinal;

}
