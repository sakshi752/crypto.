import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import LandingPage from "./pages/LandingPage";
import CoinInfoPage from "./pages/CoinInfoPage";
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import Compare from "./pages/Compare";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="dark:bg-[#111] bg-[#f4f0f0] duration-300 min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<CoinInfoPage />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
