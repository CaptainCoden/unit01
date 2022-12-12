// let message = prompt("Who are you saying hello to?")

// let heyTrue = message==="Carlos";

// let heyYou = false;

// if(heyTrue){
//         console.log("This is Carlos")
//     else if(heyYou){
//         console.log("Looks like you're true to yourself")


//     }
//     }else{
//     console.log("This is not Carlos")
// };

let num =1;

let add = number(prompt("How much do you want to add?"));
let cal = number(prompt("How many times do you want to add "+add+"?"));


for(let i=0; i<cal; i++){
    num=num+add;
}

// let checkName="";


// while(checkName!=="Cody"){
//     checkName=prompt("What is the name?");
// }

// let concatItem = "Hello "+message;


document.body.querySelector("#result").innerHTML=num;
// document.body.querySelector("#result").innerHTML="Cody is the name";



// &&---AND
// || ---OR
