// for(var i=0; i<=15; i++){
//   if (i===0) {
//     console.log(i + " is even");
//   } else if (i % 2===0){
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits){
//     console.log(x);
// }

// var x = 5;
// var y = 10;
// var z = x + y;
// alert(z);

// function myFunction(){
//     alert("Hello World!");
// }
// myFunction();

// let txt = "Hello World!";
// let x = txt.length;
// alert(x);

function getMostVowels(str) {
  if (typeof str !== 'string') {
    return "error"
  }else{
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let words = str.split(" ");
  let count = 0;
  let mostVowels;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let counter = 0;
  for (let i = 0; i < word.length; i++) {
    const lett = word[i];
    if (vowels.includes(lett)) {
      counter++
    }
  }
  if (counter > count) {
    count = counter;
    mostVowels = word;
  }
  }
  return mostVowels;
}
str = "I am going to pass this test!";
console.log(mostVowels);
}