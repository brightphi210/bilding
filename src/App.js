
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
import WorkerSignUpPage from "./Pages/Worker/WorkerSignUpPage";
import BuilderBnv from "./Components/Bulider/BuilderBnv";
import BuilderBvn from "./Pages/Builder/BuilderBvn";

import AuthProvider from "./Pages/Utils/AuthContext";

import ProtectedRoute from "./Pages/Utils/ProtectedRoute";
import WorkerDashboardHome from "./Pages/DashboardWorker/WorkerDashboardHome";
import SigninWorker from "./Pages/SigningWorker";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/login/user" element={<SigninWorker />} />
            <Route path="/register" element={<Register />} />

            
              {/* ================= Builder =================================== */}
              <Route path="/builder" element={<Builders />} />
              <Route path="/builder/verify" element={<BuilderVerifyPage />} />
              <Route path="/builder/options1" element={<BuilderRequestPart />} />
              <Route path="/builder/options2" element={<BuilderReqCreatePage />} />


            {/* ================= Builder Create Routes ================= */}
              <Route path="/builder/project/create" element={<BuilderCreate />} />
              <Route path="/builder/request/create" element={<BuilderProReq />} />
              <Route path="/builder/bvn" element={ <BuilderBvn/>} />
              



              {/* ======================== Worker Routes ======================== */}
              <Route path="/worker" element={<WorkerSignUpPage />} />

              {/* =================== Project Review ========================= */}
              <Route path="/builder/project/review" element={<BuilderCreateReview />} />


              {/* ======================= Dashboard ========================= */}
              {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/dashboard" element={<DashboardHome />} />
              {/* </Route> */}
              <Route path="/dashboard/projects" element={<DashProjectPage />} />
              <Route path="/dashboard/requests" element={<DashRequestPage />} />
              <Route path="/dashboard/projects/description/:id" element={<DashProjectDes />} />
            


            {/* ========================= Worker Dashboard ========================= */}
            <Route path="/dashboard/worker" element={<WorkerDashboardHome />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
