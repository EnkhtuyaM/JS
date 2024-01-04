const numbers=[1,2,3,4,5];
let multiply;
 multiply=numbers.map((a)=>{
    console.log(a)
    console.log({multiply})
    return a*2
})
console.log(multiply)

const words = ['apple', 'banana', 'cherry', 'date'];
let upper=words.map((current)=>{
    return current.toUpperCase()
})
console.log(upper)

const number = [2, 4, 6, 8, 10];
let newNums=number.map((a)=>{
    return a*a
})
console.log(newNums)

const words1 = ['apple', 'banana', 'cherry', 'date'];

let newWords=words1.map((word)=>{
    return word.length

})
console.log(newWords)
// (F - 32) * 5/9.

const temperaturesInFahrenheit = [0, 68, 86, 104]; 
let celsius=temperaturesInFahrenheit.map((fahrenheit)=>{
    return (fahrenheit-32)*5/9
})
console.log(celsius)

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Problem 1: Filter Even Numbers
// Given an array of numbers, create a new array that contains only the even numbers using the filter method.
// Expected output: [2, 4, 6, 8, 10]
let evenNum=number1.filter((evenArr)=>{
    return evenArr%2==0
})
console.log(evenNum)

const words2 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Problem 2: Filter Words with More Than 5 Letters
// Given an array of strings, create a new array that contains only the words with more than 5 letters using the filter method.
// Expected output: ['banana', 'cherry', 'elderberry']
let newWords2=words2.filter((a)=>{
    return a.length>5
})
console.log(newWords2)

const numbers2 = [-2, 5, -8, 10, -3, 7];
// Problem 3: Filter Positive Numbers
// Given an array of numbers, create a new array that contains only the positive numbers using the filter method.
// Expected output: [5, 10, 7]
let positiveNum=numbers2.filter((a)=>{
    return a>0
})
console.log(positiveNum)

const words3 = ['apple', 'banana', 'cherry', 'apricot', 'date'];
// Problem 4: Filter Words Starting with 'A'
// Given an array of strings, create a new array that contains only the words starting with the letter 'A' using the filter method.
// Expected output: ['apple', 'apricot']
let wordsA=words3.filter((startsA)=>{
    return startsA.startsWith("a")
})
console.log(wordsA)

const numbers3 = [2, 6, 9, 12, 15, 18, 21];
// Problem 5: Filter Multiples of 3
// Given an array of numbers, create a new array that contains only the multiples of 3 using the filter method.
// Expected output: [6, 9, 12, 15, 18, 21]
let multiply1=numbers3.filter((a)=>{
    return a%3==0
})
console.log(multiply1)