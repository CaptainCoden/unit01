// Functions
// Repeatable snippets of code, usually containing a series of operations
// function functionName() {
//     // whatever code is in here, gets ran whenever we INVOKE the function
//     console.log("Hello World!")
// }
// functionName();

// Parameters
//a private variable you can only access inside of the function
// function add(num1, num2) {
//     console.log(num1+num2);
// }

//Arguments
// add(1, 1);

// Return statement
// function add(num1, num2){
    // your code needs to go before your return statement

    // return one value out of the function
    // return num1 - num2;
// }

// let a = add(1, 2);
// console.log(a);cons



// Arrays: an ordered list of data
// const arrayExample = [];
// const numArr = [1, 2, 3];
// const strArr = ["one", "two", "three"];
// const mixArr = [1, "two", true];

// Index: a space in an array, start counting from 0
// console.log(numArr[2]);
// console.log(strArr[0][2]);

// const arr = ["class", "to", "welcome", "world", "Hello"];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Array methods
// splice lets us delete/replace at any point in the array
// push allows us to add something to the end of the array


// const numbers = [2, 5, 22, 39, 3, 6, 1, 69];
// function findBigNums(arr) {
//     const bigNums = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 5) {
//             bigNums.push(arr[i]);
//         }
//     }

//     return bigNums;
// }

// console.log(findBigNums(numbers));

// expectation: something that "should" happen if the code works right

// after you have expectations in English, turn it into steps of code

// Return all the positive values from the array
// should return any number bigger than zero
    // use an if/else
    // num > 0
    // should return all the numbers that match in an array
        // create an array variable
// should be a function
// should take in a param array
// loop the param array to do the logic

// const tddArr = [0, 2, 5, -5, 3, -6, -6, -10, 39];
// function onlyPositiveNums() {
//     const returnArr = [];

//     for( let i = 0; i < Array.length; i++) {
//         if(arr[i] > 0) {
//             returnArr.push(arr[i]);
//         }
//     }
//     if(num > 0) {
//         returnArr.push(num);
//     }

//     return returnArr;

// }
// console.log(onlyPositiveNums(tddArr));

// function concatenateStrings(a,b){
//     let(a="hello")
//     let(b="goodbye")
//     console.log(concatenateStrings
    
//   }
// function sumToN(3) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//       total += i;
//     }
//     return total;
//   }

function factorial(n) {
    n=2
    if (n <= 0)
    console.log(1);
    let factor=0;
    for (var i = n; i >= n; i--) {
      factor *= i;
    }
       if(typeof n !== 'integer'){
       console.log("error")
    }else{
       console.log(factor);
    }
  }