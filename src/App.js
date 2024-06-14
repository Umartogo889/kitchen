// components 
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import Contacts from "./pages/Contacts"
import Delivery from "./pages/Delivery"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
