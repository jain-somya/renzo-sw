import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MainPage from "./Components/MainPage";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/page" element={<MainPage></MainPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
