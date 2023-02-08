import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OS from "./pages/OS";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/os" element={<OS />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
