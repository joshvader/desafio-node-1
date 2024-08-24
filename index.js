import { crearCita, leerCitas } from './operaciones.js';

const argumentos = process.argv.slice(2)

//en los argumentos guardará primero la función escogida por el usuario y luego el resto de argumentos
const [funcion, ...args] = argumentos

//condición que evalua la función a utilizar en los argumentos de consola
if (funcion == 'leerCitas') {
    leerCitas();
} else if (funcion == 'crearCita') {

    //el argumento que se envía solo será el args(datos de la mascota)
    crearCita(args);
    // con esto se registraría tambien el nombre de la función
    // crearCita(argumentos);
}