//10th April 2026
//object data type
let person ={
    name: "John",
    age: 19,
};
console.log(person.name);
console.log(person.age);

//array data type
let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

//array with multiple data typed
let mixedArray = [1,"hello",true,{name:"Anu"},[1,2,3]]
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

//map on array
//map creates
let newArray = [1,2,3,4,5];
let squaredArray = newArray.map(num=>num*num);
console.log(squaredArray);
let added = newArray.map(num=>num+1);
console.log(added);

//CLASS OF 16/04/2026
//------3 methods of function declaration in JavaScript------


// //function declarartion 
// function multiply(a,b) {
//     return a*b;
// }
// console.log(multiply(2,3));

//function expresiion
let divide = function (a,b) {
    return a/b;
};
console.log(divide(10,2));


//arrow function
const add = (a,b)=> a+b;
console.log(add(2,3));

const multiply = (a,b) => a*b;
console.log(multiply(2,3));

const greet = (name) => {
    console.log(`hello ${name}!`);
};
greet("Anushka");

//CLASS OF 17/04/2026
//map on array
//map creates a new array by applying a function to each element of the original array
let newsArray = [1,2,3,4,5];
let new_squaredArray = newArray.map((num)=>num*num);
console.log(new_squaredArray);

let new_added = newArray.map((num)=>num+1);
console.log(new_added);

//filter on array
//filter creates a new array with all elements that pass the test implemented by the provided function
let evenNumber = [1,2,3,4,5];
let filteredEvenNumbers = evenNumber.filter((num)=>num%2===0);
console.log(filteredEvenNumbers);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator,currentValue)=>accumulator+currentValue,0);//reduce applies a function against an accumulator and each element in the array to reduce it to a single value
console.log(total);
//accumulator :  0 1 3 6 10   //10+5 = 15
//currentValue : 1 2 3 4 5