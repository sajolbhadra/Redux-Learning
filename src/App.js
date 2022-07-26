// import { Routes, Route, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import GettingStarted from "./Component/GettingStarted/GettingStarted";
import Home from "./Component/Home/Home";
import Tutorial from "./Component/Tutorial/Tutorial";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./Component/Admin/Admin";
import AdminPanel from "./Component/Admin/AdminPanel";
import InputData from "./Component/Admin/InputData";
import ManageData from "./Component/Admin/ManageData";
import AllUser from "./Component/Admin/AllUser";
import GettingStartedWithRedux from "./Component/Documentation/GettingStartedWithRedux/GettingStartedWithRedux";
import Installation from "./Component/Documentation/Installation/Installation";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route
          path="/gettingStarted"
          element={<GettingStarted/>}
        >
          <Route path="getting-started" element={<GettingStartedWithRedux/>} />
          <Route path="installation" element={<Installation/>}/>
          
        </Route>
        <Route path="/tutorial" element={<Tutorial></Tutorial>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />

        <Route path="/admin" element={<Admin></Admin>}> 
            <Route index element={<AdminPanel></AdminPanel>}> </Route>
            <Route  path="inputData"element={<InputData></InputData>} > </Route>
            <Route  path="manageData" element={<ManageData></ManageData>} > </Route>
            <Route  path="allUser"element={<AllUser></AllUser>} > </Route>
        </Route>



        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
