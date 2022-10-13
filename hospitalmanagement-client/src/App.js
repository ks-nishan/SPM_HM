import "./App.css";
import NavBar from "./componets/NavBar";
import Patients from "./componets/n_Patients";
import Register from "./componets/n_CreatePatient";
import EditPatient from "./componets/n_EditPatient";
import Patient from "./componets/n_DetailPatient";
import Login from "./componets/n_login/n_Login";
import Home from "./componets/n_home";
import Programs from "./componets/n_Programs";
import CreateProgram from "./componets/n_CreateProgram";
import EditProgram from "./componets/n_EditProgram";
import PatientsProgeam from "./componets/n_patients_programs";

import CrudAdd from "./componets/cruds/CrudAdd";
import CrudTable from "./componets/cruds/CrudTable";
import CrudListView from "./componets/cruds/CrudListView";
import CrudGridView from "./componets/cruds/CrudGridView";
import CrudDetails from "./componets/cruds/CrudDetails";
import CrudEdit from "./componets/cruds/CrudEdit";
import CrudDelete from "./componets/cruds/CrudDelete";

import AddnewDoctor from "./componets/cruds/AddnewDoctor";
import Doctorcrudtable from "./componets/cruds/Doctorcrudtable"
import ThHome from "./componets/pages/ThHome";
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
            <Route exact path="/thhome" element={<ThHome/>} />	
          <Route exact path="/cruds" element={<CrudTable />} />					
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/Doc" element={<AddnewDoctor />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
					<Route exact path="/cruds/tab" element={<Doctorcrudtable />} />
					
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
