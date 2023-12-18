let nums=[1,6,5,4,8,7,9,1,22,21,25,45,48,49,27];
let newNums = nums.map((a)=>{
    if (a%3==0)
    
        return {name: "bayar", age:25}
    } 
)
console.log(newNums)
console.log(nums)

// let evenArr=nums.filter((a)=>{
//     return a%2==0
// })
// console.log("evenArr:", evenArr)

let nums1 = nums.sort((a, b)=>{
    return a-b
})
let numsMax = nums1.filter((a)=>{
    return a>=25
})
console.log(numsMax)