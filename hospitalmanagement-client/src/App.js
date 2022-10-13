import "./App.css";
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
// Mathy
import AddMedicines from "./componets/m_AddMedicines";
import MedicinesAdmin from "./componets/m_MedicinesAdmin";
import DeliveryDetails from "./componets/m_deliveryDetails";
import Pharmacy from "./componets/m_pharmacy";
import Pay from "./componets/m_pay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          {/* Mathy */}
          <Route exact path='/addmed' element={<AddMedicines/>}/>
          <Route path='/show' element={<MedicinesAdmin/>}/>
          <Route path='/delivery' element={<DeliveryDetails/>}/>
          <Route  path="/pay" element={<Pay/>} />
          <Route path='/phar' element={<Pharmacy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
