function mostrar()
{
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;
  let mejorNotaFisica;
  let nombreMejorNotaFisica;
  let flagMejorFisica = 1;
  let flagMujerJoven = 1;
  let nombreMujerJoven;
  let edadMujerJoven;
  let contTotalAlumnos = 0;
  let contFisica = 0;
  let contQuimica = 0;
  let contSistemas = 0;
  let porcentajeFisica; 
  let porcentajeQuimica;
  let porcentajeSistemas;
  let flagMaterias = 1;
  let masMaterias;
  let nombreMasMaterias;
  let edadMasMaterias;

    for ( let i = 0; i < 500 ; i++ ){

        nombre = prompt('ingrese un nombre');
        
        //validamos cantidad de materias
        cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias: "));
		while ( cantidadMaterias <= 1  && cantidadMaterias >= 5){				
			cantidadMaterias = prompt("Error. Ingrese cantidad de materias maximo  5.");
		}
        
        // validamos carrera
        carrera = prompt("Ingrese carrera: quimica, fisica y sistemas.");
	    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
		carrera = prompt("Error. Ingrese carrera: quimica, fisica y sistemas");
	    }
        
        //validamos nota promedios
        notaPromedio = parseInt(prompt("Ingrese nota promedio: "));
        while (isNaN(notaPromedio) || notaPromedio < 0  && notaPromedio >= 10){				
        notaPromedio = prompt("Error. Ingrese nota promedio entre 0 y 10.");
        }
        
        //validamos edad
        edad = prompt('ingrese su edad');
	    while (isNaN(edad) && edad <= 0)  {
        edad = prompt('edad invalido, ingrese nuevamente su edad');
	    }
        
        //validamos sexo
        sexo = prompt("Ingrese el sexo f, m o no binario: ");
		while(sexo != "m" && sexo != "f" && sexo != "no binario"){
		sexo = prompt("Error. Ingrese el sexo: f / m / mo binario ");
	   }

// A  El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    if(carrera == "fisica" && (flagMejorFisica || notaPromedio > mejorNotaFisica)){
    mejorNotaFisica = notaPromedio;
    nombreMejorNotaFisica = nombre;
    flagMejorFisica = 0;
    }


//B b) El nombre de la alumna mas joven.
    if(sexo == "f"){
		if(flagMujerJoven || edad < edadMujerJoven){
			edadMujerJoven = edad;
			nombreMujerJoven = nombre;
			
			flagMujerJoven = 0;
		}
	}
    

    //C Porcentaje de estudiantes que estudia cada carrera.
    switch(carrera){
        case "fisica":
            contFisica++;
            break;
        case "quimica":
            contQuimica++;
            break;
        case "sistemas":
            contSistemas++;
            break;

    }

    contTotalAlumnos++

   // D) La edad y nombre del estudiante que cursa mas materias menos la carrera de Quimica.

    if(carrera != "quimica" && (flagMaterias == 1 || masMaterias < cantidadMaterias) ){
        nombreMasMaterias = nombre;
        masMaterias = cantidadMaterias;
        edadMasMaterias = edad;
        
        flagMaterias = 0;

    }


    }


    // RESPUESTA A
    if(flagMejorFisica == 0){
        console.log("El nombre de la mejor nota de los alumnos de fisica es " + nombreMejorNotaFisica + " con una nota de " + mejorNotaFisica);
    }else{
        console.log("No se registraron alumnos de fisica");
    }

    //RESPUESTA B
    if(flagMujerJoven == 0){
        console.log("La nombre de la mujer mas joven es " + nombreMujerJoven + " con una edad de " + edadMujerJoven + " años");
    }else{
        console.log("No se registraron mujeres");
    }

    //Respuesta C
    porcentajeFisica = (contFisica * 100) / contTotalAlumnos;
    porcentajeQuimica = (contQuimica * 100) / contTotalAlumnos;
    porcentajeSistemas = (contSistemas * 100) / contTotalAlumnos;
    
    if(carrera == "fisica"){
        console.log("El porcentaje de los que estudian fisica es " + porcentajeFisica);
    }else{
        console.log("No hay estudiantes de fisica.");
    }
    if(carrera == "quimica"){
        console.log("El porcentaje de los que quimica es " + porcentajeQuimica);
    }else{
        console.log("No hay estudiantes de quimica.");
    }   
    if(carrera == "sistemas"){
        console.log("El porcentaje de los que estudian sistemas es " + porcentajeSistemas);
    }
    else{
        console.log("No hay estudiantes de sistemas.");
    }


    // RESPUESTAS D
    if(flagMaterias = 0){
        console.log("el estudiante que cursa mas materias  tiene " + edadMasMaterias +" años" +  " y se llama " +nombreMasMaterias);
    }
}
