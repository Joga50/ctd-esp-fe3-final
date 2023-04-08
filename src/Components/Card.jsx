import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const card = { name, username, id };
    const cardString = JSON.stringify(card);
    localStorage.setItem(`card_${id}`, cardString);
  }

  return (
    <div className="card" style={{padding: "5px"}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img  style={{ height: "180px"}} src="images/doctor.jpg" alt="doctorImg" />
        <p>{name}</p>
       <p>{username}</p>
       <p>{id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`}><b>Ver detalle</b></Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


        
        <button style={{backgroundColor: "rgb(133, 182, 225)"}} onClick={addFav} className="favButton">Add fav <FontAwesomeIcon icon={faStar} /></button>
    </div>
  );
};

export default Card;
