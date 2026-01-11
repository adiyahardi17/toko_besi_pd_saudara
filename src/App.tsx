import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProdukLengkap from "./pages/ProdukLengkap";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk-lengkap" element={<ProdukLengkap />} />
      </Routes>
    </BrowserRouter>
  );
}
