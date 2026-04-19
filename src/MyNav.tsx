import Home from "./Home";
import About from "./About";
import Products from "./Products";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function MyNav() {
  return (
    <BrowserRouter>
        <SetNav />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Products" element={<Products />} />
            </Routes>
    </BrowserRouter>
  );

}

function SetNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Products">Products</Link></li>
            </ul>           
        </nav>
    );
}

export default MyNav;