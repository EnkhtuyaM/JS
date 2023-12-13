let products = [
  {
    name: "ABC songs",
    price: 15,
    currency: "USD",
    category: "book",
    brand: "ABC",
    stock: 10,
  },

  {
    name: "rice coocker",
    price: 150,
    currency: "USD",
    category: "electronic",
    brand: "LG",
    stock: 3,
  },

  {
    name: "iphone14",
    price: 1000,
    currency: "USD",
    category: "electronic",
    brand: "Apple",
    stock: 100,
  },

  {
    name: "bed sheet",
    price: 75,
    currency: "USD",
    category: "home",
    brand: "Calvin Klein",
    stock: 10,
  },

  {
    name: "toy",
    price: 15,
    currency: "USD",
    category: "kids",
    brand: "ABC",
    stock: 10,
  },

  {
    name: "pajama",
    price: 115,
    currency: "USD",
    category: "cloth",
    brand: "Gap",
    stock: 1000,
  },

  {
    name: "curtain",
    price: 15,
    currency: "USD",
    category: "home",
    brand: "ABC",
    stock: 103,
  },

  {
    name: "iron",
    price: 111,
    currency: "USD",
    category: "electronic",
    brand: "Sony",
    stock: 10,
  },

  {
    name: "dish washer",
    price: 15,
    currency: "USD",
    category: "electronic",
    brand: "LG",
    stock: 10,
  },

  {
    name: "TV",
    price: 1500,
    currency: "USD",
    category: "electronic",
    brand: "Samsung",
    stock: 110,
  },
];

//1. function prodDiscount(products) {
//   for (let i = 0; i < products.length; i = i + 1) {
//     products[i].price = products[i].price * 0.9;
//     console.log(products);
//   }
// }
// let answer = prodDiscount(products);
// console.log(answer);

//2. function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i]);
//     }
//   }
// }

// findByCategory("home");

//3. function findExpensiveProd(products) {
// let x = products[0].price;
// function findMostExpensive() {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].price > x) {
//       x = products[i].price;
//     }
//   }
//   console.log(x);
// }
// findMostExpensive();
// findExpensiveProd(x);

//4.(bodoj chadaagui oroldlogo tudii) function findLowestStock() {
//   let y = products[0].stock;
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].stock < y) {
//       y = products[i].stock;
//     }
//   }
//   console.log(y);
// }
// findLowestStock();

products.sort((prod1, prod2)=>{
  return prod1.stock-prod2.stock

})
console.log(products)
