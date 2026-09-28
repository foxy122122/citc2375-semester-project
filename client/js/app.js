const title = "cool game collection";
const count = 3;
const rating1 = 10;
const rating2 = 10;
const rating3 = 10;
const finished = false;
console.log(`Welcome to my ${title}.`);
console.log(`this is my ${title}. in it theres cool games.`);
if (finished) {
  // confetti effect that may or may not even happen
} else {
  console.log("I have not finished my collection yet.");
}
console.log(`I have ${count} games in my collection. The average rating is ${(rating1 + rating2 + rating3) / count}.`);