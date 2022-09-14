import "./assets/scss/style.scss";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import Example2 from "pages/Example2";
import Example3 from "pages/Example3";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailsPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
