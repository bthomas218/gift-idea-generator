import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import WishList from "./pages/WishList";
import NavBar from "./components/NavBar";
import { WishListProvider } from "./context/WishListContext";

export default function App() {
  return (
    <>
      <NavBar />
      <WishListProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </main>
      </WishListProvider>
    </>
  );
}
