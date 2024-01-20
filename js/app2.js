 let arreglo=[5,1,8,6,3];
 let arreglonuevo=[];


 for(let i=arreglo.length-1 ;i>=0;i--){
        arreglonuevo.push(arreglo[i]);
 }

 console.log(arreglonuevo);
 console.log(arreglo);
//2. Calcula la suma de todos los elementos de un arreglo.
// let arreglo2=[2,8,5,1];
// let suma=0;

//     arreglo2.forEach((numero)=>{
//           suma+=numero;
         
//     });

// console.log(suma);

//3. Encuentra el número mayor de un arreglo.

// let arreglo3=[4, 5, 1, 8, 3];
// //Spread operator saco un copia
// let mayor=Math.max(...arreglo3);
// console.log(mayor);

//4 

//let arreglo=[3, 4, 5, 12, 6, 1, 13];
//const resultado=arreglo.filter((numero)=> {
//    return numero%2==0
//});
//
//console.log(resultado);

//5

const library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    },
    ];


const libroestadotrue=library.filter((libro)=>{
    return libro.readingStatus==true; 
})

console.log(libroestadotrue);

libroestadotrue.forEach((libro)=>{
    console.log(`Libro ${libro.author} Nombre ${libro.title}`);
})

