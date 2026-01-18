import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Competition from "./pages/Competition";
import Participate from "./pages/Participate";
import Rule from "./pages/Rules";

import Members from "./pages/Members";
import Winners from "./pages/Winners";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/participate" element={<Participate />} />
         <Route path="/rule" element={<Rule />} /> 
        <Route path="/members" element={<Members />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
