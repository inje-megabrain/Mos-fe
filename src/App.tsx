import { RecoilRoot } from "recoil";
import "./App.css";
import Desktop from "./features/Desktop";
import WindowLayer from "./features/WindowLayer";

function App() {
  return (
    <RecoilRoot>
      <>
        <Desktop />
        <WindowLayer />
      </>
    </RecoilRoot>
  );
}

export default App;
