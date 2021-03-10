
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;
	let acumqa = 0;
	let contqa = 0;
	let acumprogramador = 0;
	let contprogramador = 0;
	let acumanalista = 0;
	let contanalista = 0;
	let promediop = 0;
	let promedioq = 0;
	let promedioa = 0;
	let flagmayorsueldo = 1;
	let mayorsueldo;
	let sexomayorsueldo;
	let contprogramadornobinario = 0;
	let flagempleadamayorsueldo = 1;
	let mayorsueldof;
	let nombremayorsueldo;


do {
	nombre=prompt("ingrese nombre: ");

	// validamos edad
	edad = parseInt(prompt("ingrese edad (entre 18 y 125): "))
	while (isNaN(edad) || edad < 18 || edad >125){
		edad = parseInt(prompt("edad incorrecta, ingrese edad (entre 18 y 125): "));
	}

	//validamos sexo
	sexo = prompt("ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
	while (sexo != "f" && sexo != "m" && sexo !="n"){
		sexo = prompt("sexo incorrecto, ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
	}
	//validamos puesto
	puesto= prompt("ingrese puesto de trabajo (programador, analista, Qa): ").toLowerCase();
	while (!(puesto == "programador" || puesto == "analista" || puesto == "qa")) {
		puesto= prompt("puesto incorrecto, ingrese puesto de trabajo (programador, analista, Qa): ").toLowerCase();
	}
	//validamos sueldo
	sueldo = parseInt(prompt("ingrese el sueldo (entre 15000 y 70000): "));
	while (sueldo < 15000 || sueldo > 70000){
		sueldo = parseInt(prompt("sueldo incorrecto, ingrese el sueldo (entre 15000 y 70000): "));	
	}

	//seleccionamos puesto para contar cantidad de puesto y acumular para sueldos 
	switch (puesto){

		case "analista":
			acumanalista += sueldo;
			contanalista++;
			break;
		case "programador":
			acumprogramador += sueldo;
			contprogramador++;
			break;
		case "qa":
			acumqa+= sueldo;
			contqa++;
			break;

	}// fin del swtich

	
	//realizamos un flag para saber el primer sueldo mayor
	if(flagmayorsueldo || sueldo > mayorsueldo){
		mayorsueldo = sueldo;
		sexomayorsueldo = sexo;
		flagmayorsueldo = 0;
	}
	

	if (sexo == "n" && sueldo > 20000 && sueldo < 55000){
		contprogramadornobinario++;
	}

	if (sexo == "f" && (flagempleadamayorsueldo || mayorsueldo < sueldo)){
		mayorsueldof = sueldo;
		nombremayorsueldo = nombre
		flagempleadamayorsueldo = 0;

	}
	
	seguir= prompt("quiere continuar ? s/n: ")
} while (seguir == "s");

//sacamos el promedio de cada puesto
if(contqa != 0){
	promedioq = acumqa / contqa;

}
if (contprogramador != 0){
	promediop = acumprogramador / contprogramador;

}
if (contanalista !=0 ){
	promedioa = acumanalista / contanalista;
}

//lo imprimimos las respuestas a y b
document.write("a- Promedio de sueldos para cada puesto:" + promediop + ", el promedio de sueldo de analista es:" + promedioa + "el promedio de sueldo de Qa es:" + promedioq + "<br>");
document.write("b- el sexo que percibe mayor sueldo es:" + sexomayorsueldo + "<br>");

//empleada mayor sueldo
if (flagempleadamayorsueldo == 0){
	document.write("c- el nombre del empleado femenino con mayor sueldo es: " + nombremayorsueldo + "<br>");

}else {
	document.write("c- no se ingresaron empleados femeninos");
}

//cantidad de programadores no binarios que cobran salarios
if (contprogramadornobinario != 0){

	document.write("d- la cantidad de programadores no binarios que cobran entre 20000 y 55000 es: " + contprogramadornobinario + "<br>");
}else{
	document.write("d- no se ingresaron programadores no binarios con sueldos entre 20000 y 55000");
}

}
