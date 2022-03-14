import { Navbar } from "./components/navbar/navbar.js";
import { Home } from "./pages/home.js";
import Category from "./pages/category.js";
import NotFound from "./pages/404.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global-styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="category/:category" element={<Category />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
