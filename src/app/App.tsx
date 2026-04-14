import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Results from "./pages/Results";

export default function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
