import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
   
    const cardString = localStorage.getItem(`card_${id}`);
    const card = JSON.parse(cardString);
    if (card) {
      setIsFav(true);
    }
  }, [id]);

  const addFav = () => {
   
    const card = { name, username, id };
    const cardString = JSON.stringify(card);
    localStorage.setItem(`card_${id}`, cardString);
    setIsFav(true);
  };

  const removeFav = () => {
    
    localStorage.removeItem(`card_${id}`);
    setIsFav(false);
  };

  return (
    <div className="card" style={{ padding: "5px" }}>
      <img
        style={{ height: "180px" }}
        src="images/doctor.jpg"
        alt="doctorImg"
      />
      <p>{name}</p>
      <p>{username}</p>
      <p>{id}</p>
  
      <Link to={`/detail/${id}`}>
        <b>Ver detalle</b>
      </Link>
      {isFav ? (
        <button
          style={{ backgroundColor: "rgb(133, 182, 225)" }}
          onClick={removeFav}
          className="favButton"
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "yellow", height: "15px" }}
          />
        </button>
      ) : (
        <button
          style={{ backgroundColor: "rgb(133, 182, 225)" }}
          onClick={addFav}
          className="favButton"
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "white", height: "15px" }}
          />
        </button>
      )}
    </div>
  );
};

export default Card;

