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
const itemList = document.getElementById('item-list');
const filterControl = document.getElementById('filter');
const filterStorageKey = 'selectedItemType';
try {
  const savedFilter = localStorage.getItem(filterStorageKey);
  if (savedFilter !== null && Array.from(filterControl.options).some(option => option.value === savedFilter)) {
    filterControl.value = savedFilter;
  }
} catch (error) {
  // Keep the default filter when storage is unavailable.
}
const favoriteStorageKey = 'favoriteItemIds';
let favoriteItemIds = new Set();
try {
  const savedFavoriteIds = JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]');
  if (Array.isArray(savedFavoriteIds)) {
    favoriteItemIds = new Set(savedFavoriteIds.map(String));
  }
} catch (error) {
  favoriteItemIds = new Set();
}

function renderItems(items) {
  itemList.innerHTML = '';
  items.forEach(item => {
    const itemDiv = document.createElement('article');
    itemDiv.className = 'games';
    if (item.type === 'notAdded') {
      itemDiv.innerHTML = `
        <hr>
        <p class="notAdded">This item has not been added to the collection yet.</p>
        <hr>`;
    } else {
      const description = item.id === 2
        ? `<p>A gacha game that is perfect for those who like books and strategy games. All of the main characters come from books like:</p>
          <ul>
            <li>Don Quixote from Don Quijote</li>
            <li>Ishmael from Moby Dick</li>
            <li>Heathcliff from Wuthering Heights</li>
            <li>Outis from Odyssey</li>
          </ul>
          <p>The best part is you can play it on the go, on both mobile and PC.</p>`
        : `<p>${item.description}</p>`;
      const price = item.price === 0 ? 'Free' : `$${item.price}`;
      const isFavorite = favoriteItemIds.has(String(item.id));

      itemDiv.innerHTML = `
        <hr>
        <h2>${item.name}</h2><img src="${item.img}" alt="${item.name}">
        <p class="genre">genre: ${item.type}</p>
        ${description}
        <p>Price: ${price}</p>
        <p>Rating: ${item.rating !== null ? item.rating : 'N/A'}</p>
        <button class="steamlink" type="button"><a target="_blank" href="${item.steamLink}">Steam page</a></button>
        <button class="favorite-toggle" type="button" data-item-id="${item.id}" aria-pressed="${isFavorite}">${isFavorite ? '★ Favorited' : '☆ Favorite'}</button>
  
        <hr>`;
    }
    itemList.appendChild(itemDiv);
  });
}
function renderFilteredItems() {
  const selectedType = filterControl.value;
  renderItems(selectedType === '' || selectedType === 'all' ? items : getItemsByType(selectedType));
}
renderFilteredItems();
itemList.addEventListener('click', (event) => {
    renderFilteredItems();
  const favoriteButton = event.target.closest('.favorite-toggle');
  if (!favoriteButton || !itemList.contains(favoriteButton)) return;

  const itemId = favoriteButton.dataset.itemId;
  if (favoriteItemIds.has(itemId)) {
    favoriteItemIds.delete(itemId);
  } else {
    favoriteItemIds.add(itemId);
  }
  localStorage.setItem(favoriteStorageKey, JSON.stringify([...favoriteItemIds]));
  renderItems(items);
});

filterControl.addEventListener('change', (event) => {
  const selectedType = event.target.value;
  try {
    localStorage.setItem(filterStorageKey, selectedType);
  } catch (error) {
    // Filtering still works when storage is unavailable.
  }
  renderFilteredItems();
});
