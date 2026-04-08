import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<div>Results</div>} />
          </Routes>
        </main>
      </div>
    </>
  );
}
