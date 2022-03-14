import { Home } from "./pages/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.js";
import "./global-styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
