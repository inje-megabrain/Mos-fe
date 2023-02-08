import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OS from "./pages/OS";
import T from "./pages/T";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/os" element={<OS />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/T" element={<T />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
