const title = "cool game collection";
const finished = false;
console.log(`Welcome to my ${title}.`);
console.log(`this is my ${title}. in it theres cool games.`);
if (finished) {
  // confetti effect that may or may not even happen
} else {
  console.log("I have not finished my collection yet.");
}
const count = itemcount();
const { averageRating } = ratingSummary();
console.log(`I have ${count} games in my collection. The average rating is ${averageRating}.`);