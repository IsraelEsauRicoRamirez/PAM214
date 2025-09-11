// Tipos de datos 
//"Hello World"// Cadena de caracteres (String)
//'Hello World'// String



//10000 // Operar dentro de las aplicaciones
//1000.1// numbers
//-2.3

// boolean
//true
//false

// array (arreglo)
//['joe' ,'ryan' ,'martha']// Lista de strings
//[1, 2, 3]
//[true, false, true, false]


// Object (objeto)
//'ryan'
//70.4
//14
//true

//{
  // "username": 'ryan', // clave y valor
//   "score": 70.4,// clave y valor
//   "hours": 14,// clave y valor
//   "proffesional": true// clave y valor
//}

//Variables
/*
var nameuser = "john";
let lastname = "carter";
// reasignando el valor de la variable 
nameuser = 'pepe';

const PI = 3.1415; // Una constante se mantiene con un mismo valor.

console.log(PI)

// @username = 'fazt'; Una variable no puede empezr con algun nmero o simbolos 

//camelcase 
let userName = 'gordon'; // Utilizar diferenciaciones en las variablres para distinguirlas.

/*
Otra manera de poner comerntarios largos.
e
e
e
e
*/
/*
// Operadores como (+, - , *, /)
let numberOne =60;
let numbertwo = 100;

let result = numberOne + numbertwo;

//Concatenacion.
let name = 'jon';
let lastname = 'carter';

let complerenName = name + ' ' + lastname;



//Comparaciones <>,==,!=, <=, >=

let numberThree = 100;
let numberFour = 500;

let resulttwo = numberThree >= numberFour;
//

let passwordDB = 'PEPE123'
let input = 'PEPE123'

let resultThree = input == passwordDB;

//Condicional

if(resultThree == true) // === tambien sirve para comparar.
{
  console.log('Login Correcto');
} else 
{
  console.log('contrase;a incorrecta');
}

*/
/*
//Ejemplo
 let score = 70;

 if(score > 30)
 {
  console.log('Nececitas practicar mas');
 } else if(score > 15 )
 {
  console.log('Estas mejorando');
 }
 
 else 
 {
  console.log('Necesitas seguir este tutorial');
 }
*/
/*
// Comprobar multiples casos
let typecard = 'Credit Card';

switch(typecard)
{
  case 'Debid Card':
      console.log('Esta es una tarjeta de Debito');
      break;
      case'Credit Card':
      console.log('Esta es una tarjeta de Credito');
      break;
      default:
        console.log('No card')

}
*/

//Bucles
/*
let count = 0;
while(count < 50)// Aplicar condicion y si lo cumple lo realiza. Y si hay un error podria haber un bucle infinito.
{
  console.log(count);
 count++; // Es igual a  count = count + 1;
}
*/
/*
let names = [1, 2, 3];

//console.log(names.length) //  Colocar un indice names[0], .length nos da la longitud del arreglo.
for (let i = names.length-1; i >= 0; i--)
{
   console.log(names[i])
}
*/
// Funciones
/*function Saludar(person)// Puede incluir culaquier cosa adentro patra despues llamar el resultado de la funcion. (name) Parametro, pede incluir cualquier otro valor.
{

  console.log('Hello ' + person);
}

Saludar('Kara');
Saludar('Maria');
Saludar('Konor');
*/

function add(n1, n2)
{
  console.log(n1 + n2);
}
 add(100, 300);
add(3, 2);
 add(3423423, 23423423);