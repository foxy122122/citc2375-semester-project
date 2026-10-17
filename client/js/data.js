const item1 = {
  id: 1,
  name: "Item 1",
  type: "Type A",
  description: "This is the first item.",
  price: 10.99,
  rating: 100
};

const item2 = {
  id: 2,
  name: "Item 2",
  type: "Type B",
  description: "This is the second item.",
  price: 15.99,
  rating: 100
};

const item3 = {
  id: 3,
  name: "Item 3",
  type: "Type C",
  description: "This is the third item.",
  price: 7.99,
  rating: 100
};

const item4 = {
  id: 4,
  name: "Item 4",
  type: "notAdded",
  description: "This is the fourth item.",
  price: null,
  rating: null
};

const item5 = {
  id: 5,
  name: "Item 5",
  type: "notAdded",
  description: "This is the fifth item.",
  price: null,
  rating: null
};

const item6 = {
  id: 6,
  name: "Item 6",
  type: "notAdded",
  description: "This is the sixth item.",
  price: null,
  rating: null
};

const items = [item1, item2, item3, item4, item5, item6];
function getItemsById(id) {
  return items.find(item => item.id === id);
}
function getItemsByType(type) {
  return items.filter(item => item.type === type);
}
function itemcount() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === "notAdded") {
      return i;
    }
  }
}
function ratingSummary() {
    const ratedItems = items.filter(item => typeof item.rating === "number");
    const totalRating = ratedItems.reduce((sum, item) => sum + item.rating, 0);
    const averageRating = ratedItems.length ? totalRating / ratedItems.length : 0;
    return { totalRating, averageRating, ratedItemCount: ratedItems.length };
}
  const parsedItems = JSON.parse(JSON.stringify(items));
  console.log(parsedItems[0].name);
Object.assign(globalThis, { items, getItemsById, getItemsByType, ratingSummary, itemcount });