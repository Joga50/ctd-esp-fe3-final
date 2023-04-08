import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home";
import { ContextProvider } from './Components/utils/global.context';


function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
