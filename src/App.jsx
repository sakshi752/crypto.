import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import LandingPage from "./pages/LandingPage";
import Coin from "./pages/Coin";
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import Compare from "./pages/Compare";

function App() {
  return (
    <div className="dark:bg-[#111] bg-[#f4f0f0] duration-300 min-h-screen w-full scrollbar-thin scrollbar-webkit tracking-wider">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
