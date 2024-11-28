import React, { useState } from 'react';
import './App.css';

const movies = [
  { id: 1, title: "Inception", category: "Sci-Fi", description: "A skilled thief leads a heist within dreams." },
  { id: 2, title: "The Dark Knight", category: "Action", description: "A hero faces chaos in Gotham City." },
  { id: 3, title: "Interstellar", category: "Adventure", description: "A space journey to save humanity." },
  { id: 4, title: "The Matrix", category: "Sci-Fi", description: "A hacker discovers a simulated reality." },
  { id: 5, title: "Forrest Gump", category: "Drama", description: "The extraordinary life of an ordinary man." },
  { id: 6, title: "The Godfather", category: "Crime", description: "The story of a powerful mafia family." },
];

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === '' || movie.category === selectedCategory)
    );
  });

  return (
    <div className="App">
      <header className="search-header">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </header>
      <div className="content">
        <div className="movie-cards">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src="https://via.placeholder.com/150" alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Category: {movie.category}</p>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="filters">
          <h4>Categories</h4>
          <ul>
            <li
              className={selectedCategory === '' ? 'active' : ''}
              onClick={() => setSelectedCategory('')}
            >
              All
            </li>
            <li
              className={selectedCategory === 'Sci-Fi' ? 'active' : ''}
              onClick={() => setSelectedCategory('Sci-Fi')}
            >
              Sci-Fi
            </li>
            <li
              className={selectedCategory === 'Action' ? 'active' : ''}
              onClick={() => setSelectedCategory('Action')}
            >
              Action
            </li>
            <li
              className={selectedCategory === 'Adventure' ? 'active' : ''}
              onClick={() => setSelectedCategory('Adventure')}
            >
              Adventure
            </li>
            <li
              className={selectedCategory === 'Drama' ? 'active' : ''}
              onClick={() => setSelectedCategory('Drama')}
            >
              Drama
            </li>
            <li
              className={selectedCategory === 'Crime' ? 'active' : ''}
              onClick={() => setSelectedCategory('Crime')}
            >
              Crime
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
