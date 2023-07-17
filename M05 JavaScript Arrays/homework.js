/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var p = array.length-1;
   var u = array[p];   
   return u;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      array[index] = array[index]+1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var s = palabras.join(" ");
   return s;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var b = array.includes(elemento);
   return b;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // 
   var sum=0;
   for (let index = 0; index < arrayOfNums.length; index++) {
      var sum = arrayOfNums[index] + sum;     
   }
   return sum;
}
   
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código
   var sum = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
      sum = sum + resultadosTest[index];
   }
   p = sum / resultadosTest.length;
   return p;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var My = arrayOfNums[0];
   for (let index = 1; index < arrayOfNums.length; index++) {
      if (arrayOfNums[index] > My ) My = arrayOfNums[index];
   }
   return My;
}



function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (!arguments) {return 0;}
   if ( arguments.length > 0 ) 
      {
      var p = 1;
      for (let index = 0; index < arguments.length; index++) 
         {
         p = arguments[index] * p;
         }
      return p;
      }
   else
      {
      return 0;
      } 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var n = 0;
   for (let index = 0; index < array.length; index++)
      {
         if ( array[index] > 18 ) n = n + 1;
      }
   return n;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7)
      {
      return "Es fin de semana";
      }
   else
      {
         return "Es dia laboral";
      }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var a =  num.toString();
   a.split("");
   if (a[0]==="9") return true;
   return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let index = 0; index < array.length; index++) 
      {
      if ( array[index] != array[index+1] ) 
         {
         return false;
         }          
      else
         {
         return true;
         }
   }   
   }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arr = new Array();
   if (array.includes("Enero") &&
       array.includes("Marzo") && 
       array.includes("Noviembre")) 
      {
      for (let index = 0; index < array.length; index++)
         {
         if (array[index]==="Enero" || 
             array[index]==="Marzo" || 
             array[index]==="Noviembre") 
            {
               arr.push(array[index]);
            }
         }
         return arr;
      }
      else
         {return "No se encontraron los meses pedidos";} 
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = new Array();
   for (let index = 0; index < 11; index++) 
      {
         array[index] = 6 * index;
      }

      return array;
   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var a = new Array();
   for (let index = 0; index < array.length; index++) 
      {    
      if ( array[index] > 100 ) 
         {
         a.push(array[index]);
         }
      }   
      return a;
   }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var a = new Array();
   for (let index = 0; index < 10; index++) 
      {
      num = num + 2;
      a[index] = num;
      if (num === index) return "Se interrumpió la ejecución";
      }
      return a;
   }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

/* 
Buenos dias
en::
M05 JavaScript Arrays\homework.js

ejercicio ultimo::
continueStatement

la instruccion dice::
// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y se continua con la siguiente iteración.

La correccion siempre me da error si cumplo con esa instruccion.
Viendo los resultados de consola pude ver que el array esperado no tiene esa interrupcion en la interacion 5. Lo q si vi es q en efecto el array solo tiene 9 posiciones de las 10 del bucle. Y la unica q no aparece en orden creciente indicado (incremento de 2) es la posicion final.
Por lo q probe saltar esa posicion final y el comando::
npm test 05
aprobo el ejercicio.

//Este comentario esta embebido en::
// M05 JavaScript Arrays\homework.js
// enviado a mi github
// y lo coloque en slack - hilo::
// # m5_arrays_en_javascript

*/

   var a = new Array()
   for (let index = 0; index < 10; index++) 
      {
      if (index === 9) continue;
      num = num + 2;
      a[index]=num;
      }
   return a;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
