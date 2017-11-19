var nombre;
var boton = document.getElementById("btn");
boton.addEventListener("click",suma);

function suma() {
  //return num1+num2;
  var num1 = parseInt(document.getElementById("numero1").value);
  var num2 = parseInt(document.getElementById("numero2").value);


  var nums = num1 + num2;
  alert("El resultado es: " + nums);

}

//nombre =prompt("Ingrese nombre");
//console.log(nombre);

nombre = "buenas buenas \"andres\"";
document.write(nombre);

// se le asigna el valor null para borrar variable

var amigos = ["andres", "fernando"];


/*
amigos.push("camilo"); agrega otro valor al array
amigos.pop(); elimina el ultimo valor

var numeros=[1,2,3];
var masAmigos= amigos.concat(numeros); concatena 2 arrays
amigos.join(", "); le agrega ese caracter a todos los valores
amigos.sort(); los muestra en orden alfabetico
valor= prompt("mensaje","valor por defecto")  con esto lanzamos un mensaje y capturamos valor del usuario

*/
