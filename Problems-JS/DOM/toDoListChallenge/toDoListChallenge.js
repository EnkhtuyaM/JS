const products = [
  {
    id: 1001,
    name: "mac",
    price: 230,
  },
  {
    id: 1002,
    name: "iphone",
    price: 1230,
  },
  {
    id: 1003,
    name: "tv",
    price: 830,
  },
  {
    id: 1004,
    name: "ps5",
    price: 2100,
  },
];
let removeProd = products.filter((a) => {
  return a.name !== "iphone";
});
console.log("removeProd", removeProd);

// removeProd(2)
// sellProd("iphone", 2 shirheg)
// removeProd hiisnii daraa buteegdehuunuudiin ID number n dahin erembelegdeh
