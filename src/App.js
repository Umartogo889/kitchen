// components 
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
