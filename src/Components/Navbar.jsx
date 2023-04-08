import React,{useContext} from "react"
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setTheme } = useContext(ContextGlobal);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }


  return (
    <nav className={theme === "dark" ? "dark" : ""}>
       {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="/">
        Home
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/favs">
          Favs
        </Link>
      </div>
     
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  )
}

export default Navbar