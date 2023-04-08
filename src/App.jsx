import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home";
import { ContextProvider,ContextGlobal  } from './Components/utils/global.context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useEffect } from "react";

function App() {
  const { theme } = useContext(ContextGlobal);

 
  return (
    <ContextProvider>
    <div className={theme === "dark" ? "dark" : ""}>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
        <Footer />
     
    </div>
    </ContextProvider>
  );
}

export default App;
