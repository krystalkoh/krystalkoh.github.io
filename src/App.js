import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />}></Route>
        <Route path="/welcome" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
