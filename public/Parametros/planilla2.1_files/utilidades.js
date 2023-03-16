// JavaScript Document

//Defino, que se va a cargar en javascript, tan pronto se carga la pagina++
// window.addEvent('domready', function() {

		//Para q no aparesca el menu contextual, cuando se presiona clic derecho
		/*$('cuerpo').addEvent('contextmenu',function(e) 
		{
			e.stop();
		});*/
		
		//Maximizamos la ventana
		//maximizaVentana();
	// });

//Función q permite maximizar la ventana
function maximizaVentana()
{
	window.moveTo(0,0);
	window.resizeTo(screen.width,screen.height);	
}

function validarEmail(valor) 
{
	
	if (/^[_a-z0-9-]+(.[_a-z0-9-]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
	{
		return true;
	} else 
	{
		return false;
	}
}

function validarEntero(valor){
      //intento convertir a entero.
     //si era un entero no le afecta, si no lo era lo intenta convertir
     valor = parseInt(valor)

      //Compruebo si es un valor numérico
      if (isNaN(valor)) {
            //entonces (no es numero) devuelvo el valor cadena vacia
            return ""
        }else{
            //En caso contrario (Si era un número) devuelvo el valor
            return valor
        }
    }

//Funcion para validar un numero flotante
function validaFloat(campo, decimales, minimo, maximo)
{
	numero = campo.value;
	longitud = numero.length;
	
	//Validación de que sea un numero float
	if (!/^([0-9])*[.]?[0-9]*$/.test(numero) || numero > parseFloat(maximo) || numero < parseFloat(minimo))
	{
		//campo.value = numero.substring(0,longitud - 1);
		campo.value = '';
	}
	
	//Validamos que no sobrepase la cantidad de decimales establecidos
	arreglo_numero = numero.split('.');
	if(arreglo_numero.length > 1)
	{
		if(arreglo_numero[1].length > decimales)
		{
			campo.value = numero.substring(0,longitud - 1);
		}
	}
}

//Permite marcar o desmarcar todos los checkbox del formulario
function ajustar_checkbox(cajita, formulario) //Es la cajita activadora
{
	var cajitas_ajustar = formulario.getElementsByTagName('input');

	if(cajita.checked == true)
	{
		for(i=0; i < cajitas_ajustar.length; i++)
		{
			if(cajitas_ajustar[i].type == 'checkbox')
			{
				if(cajitas_ajustar[i].disabled != true)
				{
					cajitas_ajustar[i].checked = true;
				}
			}
		}
	}
	else
	{
		for(i=0; i < cajitas_ajustar.length; i++)
		{
			if(cajitas_ajustar[i].type == 'checkbox')
			{
				cajitas_ajustar[i].checked = false;
			}
		}
	}
}

//Devuelve true, si algun checkbox ha sido chequeado diferente al checkbox que activa todas las cajitas
//y ademas me envia a un campo los valores separadso por comas de los checkbox marcados
function validaSeleccion(formulario,seleccionados)
{
	$(seleccionados).value = '';
	
	var elementos = formulario.getElementsByTagName('input');
	
	for (i=0; i < elementos.length; i++)
	{
		if(elementos[i].type == 'checkbox')
		{
			if(elementos[i].checked == true && elementos[i].value != 'ACTIVADOR')
			{
				$(seleccionados).value = $(seleccionados).value + ',' + elementos[i].value;
			}
		}
	}
	
	if($(seleccionados).value == '')
	{
		return false;
	}
	else
	{
		return true;
	}
}

function trim(cadena, quitar)
{
	for(i=0; i<cadena.length; )
	{
		if(cadena.charAt(i)==quitar)
			cadena=cadena.substring(i+1, cadena.length);
		else
			break;
	}

	for(i=cadena.length-1; i>=0; i=cadena.length-1)
	{
		if(cadena.charAt(i)==quitar)
			cadena=cadena.substring(0,i);
		else
			break;
	}
	
	return cadena;
}

