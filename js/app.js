//Reto 01

//Ejercicio 01
//Crea un programa que al ingresar un número diga si es positivo o negativo.

// let numero=prompt("Ingrese un numero");
//console.log(numero>0? "El numero es positivo":"El numero es negativo");


//Ejercicio 02
// Solicitar al usuario que ingrese dos números y
// mostrar cuál de los dos es menor.
//  No considerar el caso en que ambos números son iguales.

// let numero1=prompt("Ingrese primer numero");
// let numero2=prompt("Ingrese segundo numero");

// if(numero1>numero2){
//     console.log(`El ${numero1} es el mayor`)
// }
// else {
//     console.log(`El ${numero2} es el mayor`);
// }

//Ejercicio 03

// Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o
// “x número no es divisible entre 2”. 
// (un número es divisible entre otro número si su división sea exacta, es decir, 
// el resto es igual a cero)

// let numero=prompt("Ingrese un numero");


// if(numero%2==0){
//     console.log(`El numero es ${numero} es divible entre 2`); 
// }
// else {
//     console.log(`El numero es ${numero} NO es divible entre 2`); 
// }

//Ejercicio 04 
//4.Calcular la factorial de un número:
// let numero=prompt("Ingrese un numero");

// let valorInicial=1;

// for(i=1;i<=numero;i++){
//       valorInicial*=i;
// }

// console.log(valorInicial);

//Ejercicio 05

// let numeros15=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// numeros15.forEach((numero)=>{
//     if(numero%2==0){
//         console.log(`${numero} es par`);
//     }
//     else {
//         console.log(`${numero} es impar`);
//     }
// });

//Ejercicio 6

// Crea un programa que solicite al usuario 2 números entre 1 y 50. 
// Posteriormente mostrar en consola los números del 1 hasta el 50, 
// pero añadir el mensaje “¡Lotería!” solo al mostrar 
// los números indicados por el usuario.

//  let numero1=Number.parseInt(prompt("Ingrese numero 1"));
//  let numero2=Number.parseInt(prompt("Ingrese nuemro 2"));


//  for(let i=1;i<=50;i++){
//      if(i===numero1 || i===numero2){
//          console.log(`${i} loteria`);
       
//      }   
//      console.log(i);
//  }


//Ejercicio 7

// for(let i=1;i<=100;i++){
  
//     if(i%15==0){
//         console.log("FIZBUUZ");
//         continue;
//     }
//     if(i%3==0){
//         console.log("FIZZ");
//         continue;
//     }
//     if(i%5==0){
//         console.log("BUZZ");
//         continue;
//     }

//     console.log(i);
// }


//Ejercicio 8

// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10.

// let clasificacion= Number.parseInt(prompt("Ingrese una clasificacion del 1 a 10"));

// if(clasificacion>0 && clasificacion<=10){
//         if(clasificacion<6){
//             console.log(`Reprobado con ${clasificacion}`);
//         }
//         else if(clasificacion<=8){
//             console.log( `Regular con ${clasificacion}`);
//         }
//         else {
//             console.log(`Excelente con ${clasificacion}`);
//         }
   
// }
// else{
//     console.log("Error");
// }

//Ejercicio 9

//   let topping=prompt("Eliga el topping de su preferencia").toLocaleLowerCase()
//   let helado=50;
//   switch(topping){
//       case "oreo":  
//               helado=helado+10;              
//               console.log(`El costo es ${helado}`);
//               break;
//      case "kikat":
//               helado=helado+15;
//               console.log(`El costo es ${helado}`);
//               break;
//       case "brownie":
//               helado=helado+20;
//              console.log(`El costo es "${helado}`);
//               break;
//       default:
//               console.log(`Lo sentimos no tenemos este topping el precio de su helado es ${helado} mxn sin ningun topping`);
//   }

//Ejercicio 10
//  let tipoprograma=prompt("Eliga el tipo de programa /Curso /Carrera /Master").toLocaleLowerCase();
//  let beca=prompt("Tipo de Beca /Facebook /Google /Jesua").toLocaleLowerCase();
//  let costo=0;
//  let duracion=0;
//  let descuento=0;

//  switch (tipoprograma){
//          case "curso":
//                costo=4999;
//                duracion=2;  
//          break;
//          case "carrera":
//                  costo=3999;
//                  duracion=6;  
//          break;
//          case "master":
//                  costo=2999;
//                  duracion=12;  
//          default:
//                  console.log(`No eligio el programa correcto`);
//  }

//  switch(beca){
//          case "facebook":
//                  descuento=0.2;
//                  break;
//          case "google":
//                  descuento=0.15;
//                  break;
//          case "jesua":
//                  descuento=0.5;
//                  break;
//          default:
//                  console.log("Opcion invalida");
//  }
//  let descuentomensual=costo*descuento;
//  let costmensual=costo-descuentomensual;
//  let costototal=costmensual*duracion;

// console.log(`El costo total del programa es ${costototal} y el costo mensual a pagar es ${costmensual}`);

//Ejercicio 11

let totalPagar=0;
let vehiculo=prompt("Eliga un vehiculo /coche /moto /autobus").toString();
let kmrecorridos=Number.parseInt(prompt("Cuantos Kilometro Recorristes"));
let costototalkmrecorridos=0;
let litrosConsumidos=prompt("Litros consumidos").toString();
let preciokilometro=0;
switch(vehiculo){
        case "coche" :
        preciokilometro=0.20;
        break;
        case "moto" :
        preciokilometro=0.10;
        break;
        case "autobus" :
        preciokilometro=0.5;
        break;
        default:
        console.log("Vehiculo no valido");
}

if(litrosConsumidos>0 && litrosConsumidos<100){
        litrosConsumidos=5;
}
else {
        litrosConsumidos=10;
}

costototalkmrecorridos=preciokilometro*kmrecorridos;
totalpagar=(costototalkmrecorridos)+litrosConsumidos;
console.log(totalpagar);