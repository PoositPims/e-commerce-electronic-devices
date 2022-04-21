import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
          </Routes>
          <Routes>
            <Route path="/all-products" element={<AllProducts />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
