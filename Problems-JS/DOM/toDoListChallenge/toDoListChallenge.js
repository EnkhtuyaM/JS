const products = [
  {
    id: 1001,
    name: "mac",
    price: 230,
    stock: 10,
  },
  {
    id: 1002,
    name: "iphone",
    price: 1230,
    stock: 100,
  },
  {
    id: 1003,
    name: "tv",
    price: 830,
    stock: 105,
  },
  {
    id: 1004,
    name: "ps5",
    price: 2100,
    stock: 109,
  },
];
let removeProd = products.filter((a) => {
  return a.name !== "iphone";
});
console.log("removeProd", removeProd);

// removeProd(2)
// sellProd("iphone", 2 shirheg)
// removeProd hiisnii daraa buteegdehuunuudiin ID number n dahin erembelegdeh

// function sellProd(prod,stock){
//   const newArr=products.map((a)=>{
//     if(a.name==prod){
//       a.stock=a.stock-stock
//     }
//     console.log(a);
//     return a
//   })
//   console.log(newArr)
// }
// sellProd("iphone",2)

function newID(removeProd,id){
  const newArr1=products.map((a)=>{
    if(a.name==removeProd){
      a.id=a.id+1
    }
    console.log(a);
    return a
  })
  console.log(newArr1)
}
newID()