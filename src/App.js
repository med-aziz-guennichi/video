import "./App.css";
import Api from "./Aziz";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
