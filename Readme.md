# Veterinaria JS
    Desafio 1 - Introducción a Node.

## Detalles
  * Para usar los modulos hay que crear el package.json con el siguiente comando:
  ```
   npm init -y
  ```

  * A continuación se debe agregrar la siguiente linea debajo de "main":index.js en las dependencias:
  ```
   "type": "module"
  ```

  * Esto permitira el uso de **IMPORT** y **EXPORT**


  # Instrucciones de uso de la aoo

  * La app cuenta con dos funciones que se encuentran en **operaciones.js**
     *_leerCitas()_ para leer las citas registradas e el archivo **citas.json**
     *_crearCita()_ para insertar datos de una nueva mascota a la lista.

  # Ejecución en consola

  * Para crear una nueva cita ocupamos el siguiente comando en la terminal, ejemplo: <br>
    <code>node index.js crearCita Yoli "4 meses" "Gato Siames" Blanco Vacunado</code><br>
    <code>node index.js crearCita Copito "11 años" "Perro Mestizo" Beige Sano</code><br>
    <code>node index.js crearCita Candy "3 año y 5 meses" "Perra Pitbull" Café Sano</code>

    * ahora que tenemos **citas.json** con diferentes datos usamos la función **leerCitas()**, ejemplo: <br>
    <code>node index.js leerCitas</code><br>
        Como resultado veremos una tabla con los datos insertados ya que en lugar de console.log usé console.table 

        Eso es todo el proceso para el desafio 1.
