import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
          </Routes>
          <Routes>
            <Route path="/products" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
