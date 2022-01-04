// Crea una función que tome como parámetro un número. Si es un número entero (sin
//     decimales) muestra por consola true. Si no, muestra por consola false.
let num1="5,80";

function myfunction(num1){
    if(num1 % 1 ==0);{
        console.log();
    }
}
myfunction();

// Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
// a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo:
const products = [
    "Camiseta de Pokemon",
    "Pantalón coquinero",
    "Gorra de gansta",
    "Camiseta de Basket",
    "Cinrurón de Orión",
    "AC/DC Camiseta",
  ];
  
  function showProducts() {
    for (let i = 0; i < products.length; i++) {
      if (products[i].includes("Camiseta")) {
        console.log(products[i]);
      }
    }
  }
  
  showProducts(products);