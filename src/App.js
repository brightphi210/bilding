
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Signin from "./Pages/Signin";
import Register from "./Pages/Register";

import Builders from "./Pages/Builder/Builders";
import BuilderVerifyPage from "./Pages/Builder/BuilderVerifyPage";
import BuilderRequestPart from "./Pages/Builder/BuilderRequestPart";
import BuilderCreate from "./Pages/Builder/BuilderCreate";

import DashboardHome from "./Pages/Dashboard/DashboardHome";
import DashProjectPage from "./Pages/Dashboard/DashProjectPage";
import DashRequestPage from "./Pages/Dashboard/DashRequestPage";
import DashProjectDes from "./Pages/Dashboard/DashProjectDes";
import BuilderProReq from "./Pages/Builder/BuilderProReq";


import BuilderCreateReview from "./Components/Bulider/BuilderCreateProj/BuilderCreateReview"; 
import BuilderReqCreatePage from "./Pages/Builder/BuilderReqCreatePage";

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
          <Route path="/builder/options1" element={<BuilderRequestPart />} />
          <Route path="/builder/options2" element={<BuilderReqCreatePage />} />


        {/* ================= Builder Create Routes ================= */}
          <Route path="/builder/project/create" element={<BuilderCreate />} />
          <Route path="/builder/request/create" element={<BuilderProReq />} />

          {/* =================== Project Review ========================= */}
          <Route path="/builder/project/review" element={<BuilderCreateReview />} />


          {/* ======================= Dashboard ========================= */}
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/projects" element={<DashProjectPage />} />
          <Route path="/dashboard/requests" element={<DashRequestPage />} />
          <Route path="/dashboard/projects/description/:id" element={<DashProjectDes />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
