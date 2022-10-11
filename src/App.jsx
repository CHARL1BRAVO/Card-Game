import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GameBoard from "./pages/GameBoard";

export default function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameboard" element={<GameBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
