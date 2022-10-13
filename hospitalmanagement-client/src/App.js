import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./componets/NavBar";
import Patients from "./componets/n_Patients";
import Register from "./componets/n_CreatePatient";
import EditPatient from "./componets/n_EditPatient";
import Patient from "./componets/n_DetailPatient";
import Login from "./componets/n_login/n_Login";
import Home from "./componets/n_home";
import Programs from "./componets/n_Programs";
import PrintPatients from "./componets/n_PrintPatients";
import CreateProgram from "./componets/n_CreateProgram";
import EditProgram from "./componets/n_EditProgram";
import PatientsProgeam from "./componets/n_patients_programs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import P_Dashboard from "./P_Views/P_Dashboard";
import P_ViewAllAppointments from "./P_Views/P_ViewAllAppointments";
import P_Booking from "./P_Views/P_Booking";
import P_Form from "./P_Views/P_Form";
import P_UserEdit from "./P_Views/P_UserEdit";
import P_Details from "./P_Views/P_Details";
import P_AssignDate from "./P_Views/P_AssignDate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/patients" element={<Patients />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editPatient/:id" element={<EditPatient />} />
          <Route path="/patient/:id" element={<Patient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/editProgram/:id" element={<EditProgram />} />
          <Route path="/createProgram" element={<CreateProgram />} />
          <Route path="/patientsProgram" element={<PatientsProgeam />} />
          <Route path="/labdash" element={<P_Dashboard />} />
          <Route path="/book" element={<P_Booking />} />
          <Route path="/" element={<P_ViewAllAppointments />} />
          <Route path="/form" element={<P_Form />} />
          <Route path="/edit/:id" element={<P_UserEdit />} />
          <Route path="/view" element={<P_Details />} />
          <Route path="/editdate/:id" element={<P_AssignDate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
