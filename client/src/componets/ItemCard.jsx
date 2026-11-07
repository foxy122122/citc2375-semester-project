

export default function ItemCard({
    item,
    isFavorite,
    onToggleFavorite
}) {
    return (
        <article class="games" >
                <hr></hr>
            {item.type === 'notAdded' ? (
                <p className="notAdded">This item has not been added to the collection yet.</p>
            ):item.id === 2 ? (
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.img} alt={item.name} />
                    <p class="genre">genre: {item.type}</p>
                    <p>A gacha game that is perfect for those who like books and strategy games. All of the main characters come from books like:</p>
                    <ul>
                        <li>Don Quixote from Don Quijote</li>
                        <li>Ishmael from Moby Dick</li>
                        <li>Heathcliff from Wuthering Heights</li>
                        <li>Outis from Odyssey</li>
                    </ul>
                    <p>The best part is you can play it on the go, on both mobile and PC.</p>
                    <p>Price: {item.price === 0 ? 'Free' : `$${item.price}`}</p>
                    <p>Rating: {item.rating !== null ? item.rating : 'N/A'}</p>
                    <button class="steamlink" type="button"><a target="_blank" href={item.steamLink}>Steam page</a></button>
                </div>
                ) : (
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.img} alt={item.name} />
                    <p class="genre">genre: {item.type}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price === 0 ? 'Free' : `$${item.price}`}</p>
                    <p>Rating: {item.rating !== null ? item.rating : 'N/A'}</p>
                    <button class="steamlink" type="button"><a target="_blank" href={item.steamLink}>Steam page</a></button>
                    </div>
                )
            }

            
            <button
                type="button"
                aria-pressed={isFavorite}
                onClick={() => onToggleFavorite(item.id)}
            >
                {isFavorite ? "★ Favorite" : "☆ Add to favorites"}
            </button>
            <hr></hr>
        </article>
    );
}