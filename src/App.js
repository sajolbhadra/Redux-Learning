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
import TutorialIndex from "./Component/Tutorial/TutorialIndex";
import QuickStart from "./Component/Tutorial/QuickStart";
import ReduxEssentials from "./Component/Tutorial/ReduxEssentials";
import TypeScriptQuickStart from "./Component/Tutorial/TypeScriptQuickStart";
import Videos from "./Component/Tutorial/Videos";
import GettingStartedWithRedux from "./Component/GettingStarted/GettingStartedWithRedux";
import Installation from "./Component/GettingStarted/Installation";
import ContactMe from "./Shared/ContactMe/ContactMe";

function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/gettingStarted" element={<GettingStarted></GettingStarted>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />


        <Route path="/tutorial" element={<Tutorial></Tutorial>}>
          <Route index element={<TutorialIndex></TutorialIndex>}></Route>
          <Route path="quickStart" element={<QuickStart></QuickStart>}></Route>
          <Route path="reduxEssentials" element={<ReduxEssentials></ReduxEssentials>}></Route>
          <Route path="typescriptQuickStart" element={<TypeScriptQuickStart></TypeScriptQuickStart>}></Route>
          <Route path="videos" element={<Videos></Videos>}></Route>
        </Route>

 
        <Route path="/gettingStarted" element={<GettingStarted />}>
          <Route index element={<GettingStartedWithRedux />} />
          <Route path="installation" element={<Installation />} />
        </Route>


        <Route path="/tutorial" element={<Tutorial></Tutorial>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />

        <Route path="/admin" element={<Admin></Admin>}>
          <Route index element={<AdminPanel></AdminPanel>}> </Route>
          <Route path="inputData" element={<InputData></InputData>} > </Route>
          <Route path="manageData" element={<ManageData></ManageData>} > </Route>
          <Route path="allUser" element={<AllUser></AllUser>} > </Route>
        </Route>



        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/contactUs" element={<ContactMe />} />
      </Routes>
      <Footer></Footer>
      
      {/* </Navbar> */}
      <ToastContainer />
    </div>
  );
}

export default App;
