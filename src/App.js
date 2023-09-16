
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Builders from "./Pages/Builders";
import BuilderVerifyPage from "./Pages/BuilderVerifyPage";
import BuilderRequestPart from "./Pages/BuilderRequestPart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/builder" element={<Builders />} />
          <Route path="/builder/verify" element={<BuilderVerifyPage />} />
          <Route path="/builder/request" element={<BuilderRequestPart />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
