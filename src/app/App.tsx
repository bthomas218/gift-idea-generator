import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import { WishListProvider } from "./context/WishListContext";

export default function App() {
  return (
    <>
      <div>
        <WishListProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </main>
        </WishListProvider>
      </div>
    </>
  );
}
