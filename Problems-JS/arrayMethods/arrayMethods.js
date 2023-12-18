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
  products.sort((prod1, prod2)=>{
    return prod1.price-prod2.price
  })
  console.log(products)

//1.   let a = "123";
//   let num = Number(a)
//   console.log(a)

// string-g too bolgoh

//2. let nums = [11,3,4,9,2,7,8,9,1,6];
// nums.map((a)=>{
//     console.log(a)

// })
// map method n' for loop-tei yag ijil

let nums = [11,3,4,9,2,7,8,9,1,6, 7];
let newNums = nums.map((a)=>{
    if (a%2==0){
         // return 1;
        return {name: "hosoo", age: 18}
    }else{
        return "bish"
    }
   

});
console.log (newNums);
console.log(nums)

// map n sort-s yalgaatai n nums-g eruusuu oroldohgui, shine array return-r uusgene

let evenArr = nums.filter((a)=>{
    return a%2==0;

})
console.log("evenArr:", evenArr)

// filter methodiin map-s yalgaatai n zohiomol array uusgej chadahgui, zuvhun filter-dene