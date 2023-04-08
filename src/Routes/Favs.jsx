import React, { useContext, useEffect, useReducer } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

// Define the initial state of the favorite cards array
const initialState = [];

// Define the reducer function to handle actions
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      // Add the favorite card to the state array
      return [...state, action.card];
    case "REMOVE_FAVORITE":
      // Remove the favorite card from the state array
      return state.filter((card) => card.id !== action.cardId);
    case "LOAD_FAVORITES":
      // Load the favorite cards from localStorage into the state array
      const favorites = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("card_")) {
          const cardString = localStorage.getItem(key);
          const card = JSON.parse(cardString);
          favorites.push(card);
        }
      }
      return favorites;
    default:
      return state;
  }
};

const Favs = () => {
  const { theme } = useContext(ContextGlobal);

  
  const [favorites, dispatchFavorites] = useReducer(
    favoritesReducer,
    initialState
  );

  useEffect(() => {
  
    dispatchFavorites({ type: "LOAD_FAVORITES" });
  }, []);

  
  const removeFavorite = (cardId) => {
    dispatchFavorites({ type: "REMOVE_FAVORITE", cardId });
    localStorage.removeItem(`card_${cardId}`);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""} style={{padding: "15px", minHeight: "calc(100vh - 185px)"}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
  
        {favorites.map((favorite) => (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            username={favorite.username}
            onRemoveFavorite={removeFavorite}
          />
        ))}
<h5>By clicking the star again, you can remove the dentist from favorites. The card will disappear once you reload the page. / Presionando la estrella de nuevo, puedes remover al dentista de favoritos. La carta desaparecerá una vez que recargues la página</h5>
      </div>
    </div>
  );
};

export default Favs;

