 /* String: practica #1

Declara una variable llamada miRefrán.
En otra línea asigna un refrán a esa variable.
Declara una variable llamada longitudRefran y asigna a esa variable la cantidad de letras de miRefran.
En otra línea asigna a la variable novenaLetra el valor de la novena letra del refrán.
En otra línea asigna a la variable ultimaLetra el valor de la última letra del refrán.
Busca el índice de la cadena “que” en tu refrán y asignalo a la variable índicePalabra. Si el índice es menor que cero busca cualquier otra preposición hasta que sea mayor a 0
Reemplaza la preposición encontrada por la cadena “xxx”
Convierte a mayúsculas todos los caracteres de tu refrán.
Comparte tu código🎉.*/ 

var MiRefran;
var MiRefran = 'En casa del herrero, cuchillo de palo';
MiRefran.length;
MiRefran.substring(9,10);
MiRefran[9];
MiRefran.substring(36,37);
MiRefran[36];
MiRefran.indexOf("de");
MiRefran.replace("de","xxx");
MiRefran.toUpperCase();


 /* Arrays: práctica #1
Comencemos con una práctica básica de arrays .
En esta tarea, nos gustaría que crearas un array de tres elementos, almacenados dentro de una 
variable llamada myArray. Los artículos pueden ser lo que quieras, ¿qué tal tus comidas o bandas 
favoritas? A continuación, modifica los dos primeros elementos del array utilizando una notación y 
asignación de corchetes simples []. Luego agrega un nuevo elemento al comienzo de la matriz.
Luego crea una variable de tipo string donde puedas leer todos los elementos de tu array ,
 separados por guiones -🎉
Practica avanzada. Crea un array con varios elementos de diferentes tipos. 
La regla es que por lo menos un elemento pertenezca a cada tipo de dato primitivo
 que acabamos de ver. Recuerdas cuales eran? 🤓*/ 

 let myArray = ["papasFritas", "pizza","helado"]
 const indice = [0];
 myArray[indice] = "durazno";
 const indice2 = [1];
 myArray[indice] = "manjar";
 let nuevaLongitud = myArray.unshift('Chocolate')
 let myArray = ["papasFritas", "pizza","helado"].toString(myArray);
 myArray.replace(",","-");
 const random = ["Artemisa", 35, "1.60", "06:23:00"]

 /*Arrays: práctica #2
 Ahora pasemos a otra tarea. Aquí te pasamos una cadena para trabajar.
 
 let myString = 'Javascript+es+super+cool' ;
 
 Convierta la cadena en un array, eliminando los caracteres + en el proceso.
 Guarde el resultado en una variable llamada myArray.
 Almacene la longitud del array en una variable llamada arrayLength.
 Almacene el último elemento del array en una variable llamada lastItem.
 Crea un nuevo array que tenga los elementos ordenados en orden inverso que myArray. 
 Almacenalos en un una variable llamada myInverseArray.
 Agrega un elemento al final de myInverseArray.*/

let myString = 'Javascript+es+super+cool';
myString.replaceAll('+', ' ');
varArr = myString.replaceAll('+', ' ');
let arr = Array.from(varArr); 
ArrayLenth = arr.length;
LastItem = arr[23];
MyInverseArray = arr.reverse ();
arr.push("e","s","t")

/*Condicionales: Práctica #2
En grupos de máximo 3 personas
Utilizando prompt() y alert() simula una calculadora que acepte 2 parámetros numéricos y 
1 tipo de operación, usa los parámetros y condicionales para calcular el resultado y mostrarlo
 en la consola*/

 alert("Sumemos");
 let a = prompt("agrega el primer numero ");
 a = parseInt(a)
 let b = prompt("agrega el segundo numero ");
 b = parseInt(b)
 let total = a + b;
 alert("la respuesta es : " + total)

 /*Condicionales: Práctica #1
Un restaurante te ha pedido que escribas una expresión condicional en la que verifique si 
una persona tiene edad para comprar una cerveza. Como lo harias?
Recuerda que puedes usar los metodos prompt() y alert() en la consola para capturar valores 
y enviar mensajes de alerta.
Pasa tu codigo a un archivo separado de JS con VSC o Repl.it y verifica que funcione.*/

alert("¿Eres apto para beber alcohol?");
let edad = prompt("ingresa tu edad ");
edad = parseInt(edad)
if (edad > 18) {alert("puedes ahogarte en alcohol");
  } else {
    alert("no puedes beber ;(");
  }