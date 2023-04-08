import React, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router-dom";

import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  const { theme } = useContext(ContextGlobal);
  useEffect(() => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((data) => setDentist(data))
  .catch((error) => console.log(error));
}, [id]);
  return (
    <div className={theme === "dark" ? "dark" : ""}>
    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <h1>Detail Dentist {id}</h1>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>

    </div>
  )
}

export default Detail