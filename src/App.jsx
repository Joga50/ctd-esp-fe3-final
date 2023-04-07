import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"

function App() {
  return (
      <div className="App" >
          <Navbar/>
    
<Routes>
  <Route path="/contact" element={<Contact />} />
  <Route path="/detail/:id" element={<Detail />} />
  <Route path="/favs" element={<Favs />} />
</Routes>
        
        
          <Footer/>
      </div>
  );
}

export default App;
