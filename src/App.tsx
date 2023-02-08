import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Test from "./pages/TestE";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
