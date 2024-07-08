// src/App.js
import Header from "./components/common/Header";
import { Button } from "@mui/material";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="dark:bg-[#111] bg-[#f4f0f0] duration-300  min-h-screen w-full scrollbar-thin scrollbar-webkit tracking-wider">
      <Header />
      {/* <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </Button> */}
      <LandingPage/>
    </div>
  );
}

export default App;
