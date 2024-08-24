import { readFileSync, writeFileSync } from "node:fs";

export const leerCitas = () => {

  //transforma el string(el original es un array) obtenido del archivo json a formato json/objeto
  const contenido = JSON.parse(readFileSync("citas.json", "utf-8"));

  console.log('----------------------------------------------------------------',"\n");
  console.log("CITAS DE ATENCIÓN DE MASCOTAS", "\n");

  //Validación si existen citas o no
  if (contenido.length == 0) {
    console.log("NO HAY CITAS PARA HOY");
  } else {
    console.table(contenido);
  }

  console.log('----------------------------------------------------------------');
  

  //devuelve la lista para que pueda ser usada fuera de la función al invocarse leerCitas() en otra función
  return contenido;
};

export const crearCita = (args) => {
  const [Nombre, Edad, Tipo_Especie, Color, Enfermedad] = args;

  //constante creada para usar la data el archivo json
  const contenido = leerCitas();

  //constante que representa el nuevo registro insertado por los argumentos de consola
  const nuevaCita = {
    Nombre,
    Edad,
    Tipo_Especie,
    Color,
    Enfermedad,
  };

  //inserta el nuevo registro en la data 
  contenido.push(nuevaCita);

  //sobreescribe el archivo json con la nueva data en transformada a string
  writeFileSync("citas.json", JSON.stringify(contenido));
  console.log("\n", "\n", "SU HORA SE AGENDÓ CORRECTAMENTE", "\n");

  //muestra el nuevo registro
  console.log(nuevaCita);
};