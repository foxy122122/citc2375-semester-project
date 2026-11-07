import { useState } from 'react';
import Header from './componets/Header.jsx';
import ItemList from './componets/ItemList.jsx';
import { games } from './data.js';
import './App.css';


export default function App() {
    const [selectedCategory, setSelectedCategory] =
        useState(() => {
            return localStorage.getItem(
                'myProject.selectedCategory'
            ) || '';
        });

    const [favoriteIds, setFavoriteIds] =
        useState(() => {
            const saved = localStorage.getItem(
                'myProject.savedFavoriteIds'
            );

            return saved ? JSON.parse(saved) : [];
        });


        
    function handleCategoryChange(event) {
        const category = event.target.value;

        setSelectedCategory(category);
        localStorage.setItem(
            'myProject.selectedCategory',
            category
        );
    }

    function handleToggleFavorite(itemId) {
        const updated = favoriteIds.includes(itemId)
            ? favoriteIds.filter(id => id !== itemId)
            : [...favoriteIds, itemId];

        setFavoriteIds(updated);

        localStorage.setItem(
            'myProject.savedFavoriteIds',
            JSON.stringify(updated)
        );
    }

    const filteredItems =
        selectedCategory === ''
            ? games
            : games.filter(
                game => game.type === selectedCategory
            );

    return (
        <>
            <Header />

            <main>
    <p>This is my CITC 2375 semester project.</p>
    <p></p>
                <label htmlFor="category-filter">
                    Filter games by genre:
                </label>

                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
        <option value="">All Genres</option>
        <option value="survival horror">Survival Horror</option>
        <option value="gacha">Gacha</option>
        <option value="colony sim">Colony Simulation</option>
                </select>

                <ItemList
                    items={filteredItems}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                />
            </main>
        </>
    );
}