import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/AllProducts";
import EachProduct from "./pages/EachProduct";
import MenuTypeProd from "./layout/MenuTypeProd";
import Navbar from "./layout/Navbar";
import InchargeType from "./pages/InchargeType";
import EarbudsType from "./pages/EarbudsType";
import OthersType from "./pages/OthersType";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MenuTypeProd />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
        </Routes>
        <Routes>
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
        <Routes>
          <Route path="/each-product" element={<EachProduct />} />
        </Routes>
        <Routes>
          <Route path="/incharge" element={<InchargeType />} />
        </Routes>
        <Routes>
          <Route path="/earbuds" element={<EarbudsType />} />
        </Routes>
        <Routes>
          <Route path="/others" element={<OthersType />} />
        </Routes>
        <Routes>
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
