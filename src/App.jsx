import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Detailpage from "./pages/Detailpage";
import OverView from "./pages/OverView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detailpage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/:overview-type" element={<OverView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
