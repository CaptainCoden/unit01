const caterpillar = "🐛";

const leaf = "🌿";
const rock = "🪨";

let forest = "";
for(let i=0; i<100; i++){
  if (Math.random() < 0.8) {
    forest += leaf;
  } else {
    forest += rock;
  }
}

console.log(forest);

let numLeaves = 0;
for(emoji of forest) {
  if (emoji === leaf) {
    numLeaves += 1;
  }
}

console.log(`There are ${numLeaves} leaves in the forest.`);

if (numLeaves >= 80) {
  console.log("There are enough leaves to eat :)");
  console.log(`${caterpillar} gets to feast!`);
} else {
  console.log("There are not enough leaves to eat :)");
  console.log(`${caterpillar} is hungry...`);
  process.exit();
}


  const timerLabel = `${caterpillar} ate all the leaves in`;
console.time(timerLabel);


let leafLog = "";
while (numLeaves > 0) {
  leafLog += `${numLeaves}.. `;
  numLeaves -= 1;
}
console.log(leafLog);
console.log("0! YUM!");

console.timeEnd(timerLabel);

process.exit();