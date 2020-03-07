const productos = [
  { nombre: "Ordenador PC", precio: 699, departamento: "Tecnología" },
  { nombre: "Sartenes Verdes", precio: 39, departamento: "Hogar" },
  { nombre: "Reloj Calculadora", precio: 75, departamento: "Tecnología" },
  { nombre: "Máquina Palomitas", precio: 33, departamento: "Hogar" },
  { nombre: "Mueble TV", precio: 120, departamento: "Hogar" },
  { nombre: "Tuppers", precio: 10, departamento: "Hogar" }
];

// Metodo ( find ) retorna true o false si encuentra el elemento dentro del array

const buscar = productos.find(item => {
  // return item.nombre === "Ordenador PC"; // --> Busqueda normal
  return /Mueble/g.test(item.nombre); // --> Busqueda con expresion regular
});
// console.log(buscar);

// ------------------------------------------------------------------------------- //

// Metodo ( map ) esta funcion nos ejecuta una sentencia por cada item del array

const productosIVA = productos.map(item => {
  const newPresio = item.precio + item.precio * 0.21;
  return { ...item, precio: newPresio };
});
// console.log(productosIVA)

// ------------------------------------------------------------------------------- //

// Metodo ( filter ) retorna un nuevo array con los elementos que considan con la busqueda

const productosHogar = productos.filter(item => item.departamento === "Hogar");
// console.log(productosHogar);

// ------------------------------------------------------------------------------- //

// Metodo ( every ) nospermite evaluar una condición a todos los elementos del array,
// si todos los elementos cumplen con la condicion retorna ( true ) si no ( false )

const check = productos.every(item => item.precio >= 1);
//console.log(check);

// ------------------------------------------------------------------------------- //

// Metodo ( some ) nospermite evaluar una condición a uno de los elementos del array,
// si el elemento cumplen con la condicion retorna ( true ) si no ( false )

const alguno = productos.some(item => item.precio >= 500);
//console.log(alguno);

// ------------------------------------------------------------------------------- //

// Metodo ( reduce ) nospermite sumar los valosres de los elemtos que esten dentro del array

const suma = productos.reduce((total, item) => total + item.precio, 0);
// console.log(suma);

// Objetos

// ------------------------------------------------------------------------------- //

// Metodo ( Object.freeze ) hace que un objeto no pueda ser alterado

const PRECIO = Object.freeze({
  empanada: 5,
  arepa: 8,
  tacos: 5
});

// PRECIO.tacos = 6 // --> retorna error por que el objeto es inmutable
