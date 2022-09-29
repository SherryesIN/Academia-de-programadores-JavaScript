/*Calculadora
Crea una funcion para cada una de las operaciones aritmeticas mas comunes utilizando 
las diferentes formas de sintaxis de una funcion estudiadas en el curso (Ref.)
Llama a estas funciones con diferentes parametros e imprime los resultados en consola.
Crea una funcion que reciba un array con numeros y te devuelva la suma de todos los números.*/


function multiply(a, b = 1) {
    return a * b;
  }
  
  multiply(5); 

  function aditive(a, b = 5) {
    return a + b;
  }
  
  aditive(5); 

  function rest(a, b = 8) {
    return a - b;
  }
  
  rest(15); 

  function divide(a, b = 15) {
    return a / b;
  }
  
  divide(45); 

  function module(a, b = 15) {
    return a % b;
  }
  
  module(45); 


  

  function sumatoria(x) {
  var aleatorio1 = Math.random();
  var aleatorio2 = Math.random();
  var aleatorio3 = Math.random();

    sumatoria(x) =  aleatorio1 + aleatorio2 + aleatorio3
  }
  return sumatoria(x);


  function sumar(sum1, sum2)
  {
      var resultado;
      resultado = sum1 + sum2;
      return resultado;
  }
  alert("4 + 10 = "+ sumar(4, 10) );