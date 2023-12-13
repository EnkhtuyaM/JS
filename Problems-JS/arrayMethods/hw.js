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
//   let byBrands = products.filter((a)=>{
//     return a.brand == "LG"
//   })
//   console.log("byBrands:", byBrands)

//   let prices=products.map((a)=>{
//     return a.price
//   });
//   console.log("prices:", prices)

  products.sort((prod1, prod2)=>{
    return (prod1.price-prod2.price)
  });
  console.log(products)