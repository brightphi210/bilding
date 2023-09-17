
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Signin from "./Pages/Signin";
import Register from "./Pages/Register";

import Builders from "./Pages/Builder/Builders";
import BuilderVerifyPage from "./Pages/Builder/BuilderVerifyPage";
import BuilderRequestPart from "./Pages/Builder/BuilderRequestPart";
import BuilderCreate from "./Pages/Builder/BuilderCreate";

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
          <Route path="/builder/create" element={<BuilderCreate />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
