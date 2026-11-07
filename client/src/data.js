export const games = [
    {
  id: 1,
  name: "RimWorld",
  img: "../images/rimworld.jpg",
  type: "colony sim",
  description: "a colony management game that has a very big modding community meaning you can do anything from starting a murder cult to start a hotel and give free healthcare to all or even become a cartel",
  price: 34.99,
  rating: 95,
  steamLink: "https://store.steampowered.com/app/294100/RimWorld/"

},

{
  id: 2,
  name: "Limbus Company",
  img: "../images/limbus.jpg",
  type: "gacha",
  description: `2`,
  price: 0,
  rating: 99,
  steamLink: "https://store.steampowered.com/app/1973530/Limbus_Company/"
},

{
  id: 3,
  name: "Barotrauma",
  img: "../images/capsule_616x353.jpg",
  type: "survival horror",
  description: "a co-op game where you and your crew manage a submarine doing missions on your way to the center of Europa ",
  price: 34.99,
  rating: 95,
  steamLink: "https://store.steampowered.com/app/602960/Barotrauma/"
},

{
  id: 4,
  name: "Item 4",
  img: "item4.jpg",
  type: "notAdded",
  description: "This is the fourth item.",
  price: null,
  rating: null,
  steamLink: "https://store.steampowered.com"
},

{
  id: 5,
  name: "Item 5",
  img: "item5.jpg",
  type: "notAdded",
  description: "This is the fifth item.",
  price: null,
  rating: null,
  steamLink: "https://store.steampowered.com"
},

{
  id: 6,
  name: "Item 6",
  img: "item6.jpg",
  type: "notAdded",
  description: "This is the sixth item.",
  price: null,
  rating: null, 
  steamLink: "https://store.steampowered.com"
}] 

function getItemsById(id) {
  return games.find(game => game.id === id);
}
function getItemsByType(type) {
  return games.filter(game => game.type === type);
}
function itemcount() {
  for (let i = 0; i < games.length; i++) {
    if (games[i].type === "notAdded") {
      return i;
    }
  }
}
function ratingSummary() {
    const ratedItems = games.filter(game => typeof game.rating === "number");
    const totalRating = ratedItems.reduce((sum, game) => sum + game.rating, 0);
    const averageRating = ratedItems.length ? totalRating / ratedItems.length : 0;
    return { totalRating, averageRating, ratedItemCount: ratedItems.length };
}
  const parsedItems = JSON.parse(JSON.stringify(games));
  console.log(parsedItems[0].name);
Object.assign(globalThis, { games, getItemsById, getItemsByType, ratingSummary, itemcount });