//Algunas funciones creadas por mi



//Funcion que envia elos datos por ajax para validar si el alumno que se esta insribiendo ya existe registrado.

//destino -> nombre de la capa donde cargara el resultado

//archivos -> archivo php que procesara los datos

//url -> cadena de variables que se enviaran por ajax






function validarDobleAlumno(destino, archivo, url)

{

    //toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: archivo,

        onSuccess: function(texto, xmlrespuesta) {

            if (texto > 0)

            {

                //alert("Ya se encuentra un alumno registrado \ncon los datos de identificacion que usted digitó.");

                $('validar_docu').value = 1;

                //$('alumno_num_docu').focus();

            } else {

                $('validar_docu').value = 0;

            }

        }

    });

    nuevoRequest.send(url);

}



function validarDobleAlumnoNombres(destino, archivo, url)

{

    //toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: archivo,

        onSuccess: function(texto, xmlrespuesta) {

            if (texto > 0)

            {

                //alert("Ya se encuentra un alumno registrado \ncon los Nombres y Apellidos que usted digitó.");

                $('validar_nombre').value = 1;

                //$('alumno_num_docu').focus();

            } else {

                $('validar_nombre').value = 0;

            }

        }

    });

    nuevoRequest.send(url);

}


function cargaRepresentante(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar) {
    // Variables de configuración   
    var proceso = 'proceso_carga_representantes.php';
    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;
    toggleSpinner(destino);
    //Objeto que realiza la petición
    var nuevoRequest = new Request({
        method: 'post',
        url: proceso,
        /*onRequest: function() {
        	$(destino).set('html','Cargando...');
         },*/
        onSuccess: function(texto, xmlrespuesta) {
            toggleSpinner();
            $(destino).set('html', texto);
            if (otraFuncion != '' && otraFuncion != undefined) {
                otraFuncion();
            }

        },
        onFailure: function() {
            $(destino).set('html', '');
            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');
        }
    });
    nuevoRequest.send(variables);
}


function cargaMunicipios(menu, menu2, cambio, nombre, idMunicipio)

{

    // Variables de configuración

    var proceso = 'proceso_carga_municipios2.php';

    var variables = 'col=' + $(menu).get('value') + '&nombre=' + nombre + '&municipio_id=' + idMunicipio;

    toggleSpinner(cambio);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'get',

        url: proceso,

        /*onRequest: function() {

        	$(cambio).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(cambio).set('html', texto); },

        onFailure: function() {

            $(cambio).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función para validar e-mail

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



//Función que permite cargar estudiantes

function cargaEstudiantes(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_estudiantes_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + "&seleccionar=" + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta)

        {
            toggleSpinner();
            var contenido = texto.split('@');
            if (contenido[1] != '') {
                $(destino).set('html', contenido[0]);
            } else {
                $(destino).set('html', '<h4 style="color:#F00" >No se encontraron estudiantes con promoción para reprobados.</h4>');
            }

            if (otraFuncion != '' && otraFuncion != undefined)

            {
                otraFuncion();
            }

        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función que permite cargar estudiantes

function cargaEstudiantes_novedad(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{
    // Variables de configuración

    var proceso = 'proceso_carga_estudiantes_fotos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta)

        {

            toggleSpinner();

            $(destino).set('html', texto);

        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}





function cargaGruposPazySalvo(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_grados_pazysalvos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + ' &seleccionar= ' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(destino).set('html', texto); },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



function cargaGradosSedes(independiente, dependiente, destino, opcion, grados, onchange, otros, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_grados_sedes.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&destino=' + destino + '&opcion=' + opcion + '&grados=' + grados + '&onchange=' + onchange + '&otros=' + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(destino).set('html', texto); },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Carga los estudiantes para proceso de matricula

function cargaEstudiantesAntiguos(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_estudiantes_antiguos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(destino).set('html', texto); },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}

//Carga los estudiantes para proceso de matricula SB

function cargaEstudiantesSb(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_estudiantes_sb.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(destino).set('html', texto); },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}





//Función que permite cargar Tipo de voletin

function CargaTipoBoletin(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_estudiantes_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) { toggleSpinner();
            $(destino).set('html', texto); },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función que permite cargar estudiantes

function cargaPeriodos(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_periodos_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



function toggleSpinner(objToUpdate) {

    if (typeof(objToUpdate) != "undefined") {

        objContainer = document.getElementById(objToUpdate);

        if (objContainer != null)

        {

            objContainer.innerHTML = "";

        }

    }



    if (document.getElementById('divspinner').style.display == "none")

        document.getElementById('divspinner').style.display = "";

    else

        document.getElementById('divspinner').style.display = "none";

}





//Función que permite cargar asignaturas

//OJO otraFuncion debe ser el nombre de la funcion sin () y sin comillas, cuando se pase como parametro

function cargaAsignaturas(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{
    // alert(independiente);

    // Variables de configuración

    var proceso = 'proceso_carga_asignaturas_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



function cargaAreas(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_area.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}





//Función que permite cargar cosas relacionadas con procesos de evaluacion, subprocesos, procesos base

//OJO otraFuncion debe ser el nombre de la funcion sin () y sin comillas, cuando se pase como parametro

function cargaProcesos(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_procesos_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}





//Función que permite cargar docentes

//OJO otraFuncion debe ser el nombre de la funcion sin () y sin comillas, cuando se pase como parametro

function cargaDocentes(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_docentes_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    //Objeto que realiza la petición

    toggleSpinner(destino);

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



function cargaprofundizacion(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_profundizacion.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    //Objeto que realiza la petición

    toggleSpinner(destino);

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función que permite cargar Grados

function CargarGrados(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_grados_varios.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }

        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función que permite cargar estudiantes

function mesesPeriodos(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_meses_periodos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}



//Función que permite procesos de evaluación

function cargarProcesosEvaluacion(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_conf_procesos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}

//Función que permite procesos de evaluación NEE

function cargarProcesosEva_nee(independiente, dependiente, opcion, destino, onchange, otros, otraFuncion, seleccionar)

{

    // Variables de configuración

    var proceso = 'proceso_carga_conf_procesos.php';

    var variables = 'independiente=' + $(independiente).get('value') + '&dependiente=' + dependiente + '&opcion=' + opcion + '&onchange=' + onchange + otros + '&seleccionar=' + seleccionar;

    toggleSpinner(destino);

    //Objeto que realiza la petición

    var nuevoRequest = new Request({

        method: 'post',

        url: proceso,

        /*onRequest: function() {

        	$(destino).set('html','Cargando...');

         },*/

        onSuccess: function(texto, xmlrespuesta) {

            toggleSpinner();

            $(destino).set('html', texto);

            if (otraFuncion != '' && otraFuncion != undefined)

            {

                otraFuncion();

            }



        },

        onFailure: function() {

            $(destino).set('html', '');

            alert('Ocurrio un error y no se pudo cargar la información,\npor favor intentelo nuevamente');

        }

    });

    nuevoRequest.send(variables);

}