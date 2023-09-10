import Navbar from "./components/Navbar";
import Ball from "./pages/Ball";
import CameraTuner from "./pages/CameraTuner";
import Field from "./pages/Field";
import Line from "./pages/Line";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CameraTuner />} />
          <Route path="/field" element={<Field />} />
          <Route path="/ball" element={<Ball />} />
          <Route path="/line" element={<Line />} />
        </Routes>
      </div>
    </>
  )
}

export default App