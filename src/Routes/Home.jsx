import React, { useState, useEffect, useContext  } from "react";
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ContextGlobal);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setDentists(data))
    .catch((error) => console.log(error));
  }, []);
  return (
    <main className={theme === "dark" ? "dark" : ""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
   
  )
}

export default Home