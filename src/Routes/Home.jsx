import React, { useState, useEffect, useContext, useReducer } from "react";
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";

const ADD_FAVORITE = "ADD_FAVORITE";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };
    default:
      return state;
  }
};

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ContextGlobal);

  const [state, dispatch] = useReducer(reducer, {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setDentists(data))
    .catch((error) => console.log(error));
  }, []);

  const handleAddFavorite = (id) => {
    const dentist = dentists.find((dentist) => dentist.id === id);
    dispatch({ type: ADD_FAVORITE, payload: dentist });
  };

  return (
    <main
      className={theme === "dark" ? "dark" : ""}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingBottom: "30px" }}
    >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            handleAddFavorite={handleAddFavorite}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
