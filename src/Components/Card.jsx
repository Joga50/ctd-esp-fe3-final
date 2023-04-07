import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const card = { name, username, id };
    const cardString = JSON.stringify(card);
    localStorage.setItem(`card_${id}`, cardString);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>{name}</p>
      <p>{username}</p>
      <p>{id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`}>Ver detalle</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
