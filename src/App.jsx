// src/App.js
import Header from "./components/common/Header";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="bg-[#111] text-white min-h-screen w-full scrollbar-thin scrollbar-webkit tracking-wider">
      <Header />
      {/* <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </Button> */}
    </div>
  );
}

export default App;
