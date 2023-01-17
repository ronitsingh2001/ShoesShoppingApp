import "./App.css";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import Catalogue from "./Components/Catalogue";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
    <Routes>
      <Route path="/" element={[<Banner />,<Catalogue />]}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
