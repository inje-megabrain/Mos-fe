import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OS from "./pages/OS";
import "./App.css";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import { setAccessToken, setRefreshToken } from "./api/client";

function App() {
  const accesstoken = localStorage.getItem("accessToken");
  const refreshtoken = localStorage.getItem("refreshToken");
  useEffect(() => {
    if (accesstoken != null) {
      setAccessToken(accesstoken);
    }
    if (refreshtoken != null) {
      setRefreshToken(refreshtoken);
    }
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
