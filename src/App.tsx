import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OS from "./pages/OS";
import "./App.css";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("refreshToken"));
  }, []);

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
