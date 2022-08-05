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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import GettingStartedWithRedux from "./Component/Documentation/GettingStartedWithRedux/GettingStartedWithRedux";
import Installation from "./Component/Documentation/Installation/Installation";
import ContactMe from "./Shared/ContactMe/ContactMe";
<<<<<<< HEAD
import Home2 from "./Component/Home2/Home2";
=======
import Quiz from "./Component/Quiz/Quiz";
import QuizQuestions from "./Component/Quiz/QuizQuestions.jsx";
import Result from "./Component/Result/Result";
>>>>>>> 765de6927360440750e741d713cbb1dca13438d4

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/gettingStarted"
          element={<GettingStarted></GettingStarted>}
        />

        <Route path="/tutorial" element={<Tutorial></Tutorial>}>
          <Route index element={<TutorialIndex></TutorialIndex>}></Route>
          <Route path="quickStart" element={<QuickStart></QuickStart>}></Route>
          <Route
            path="reduxEssentials"
            element={<ReduxEssentials></ReduxEssentials>}
          ></Route>
          <Route
            path="typescriptQuickStart"
            element={<TypeScriptQuickStart></TypeScriptQuickStart>}
          ></Route>
          <Route path="videos" element={<Videos></Videos>}></Route>
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
<<<<<<< HEAD
        <Route
          path="/gettingStarted"
          element={<GettingStarted />}
        >
          <Route path="getting-started" element={<GettingStartedWithRedux />} />
          <Route path="installation" element={<Installation />} />

=======
        <Route path="/gettingStarted" element={<GettingStarted />}>
          <Route path="getting-started" element={<GettingStartedWithRedux />} />
          <Route path="installation" element={<Installation />} />
>>>>>>> 765de6927360440750e741d713cbb1dca13438d4
        </Route>
        <Route path="/tutorial" element={<Tutorial></Tutorial>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />

<<<<<<< HEAD
        <Route path="/admin" element={<Admin></Admin>}>
          <Route index element={<AdminPanel></AdminPanel>}> </Route>
          <Route path="inputData" element={<InputData></InputData>} > </Route>
          <Route path="manageData" element={<ManageData></ManageData>} > </Route>
          <Route path="allUser" element={<AllUser></AllUser>} > </Route>
=======

        <Route path="/admin" element={<Admin></Admin>}>
          <Route index element={<AdminPanel></AdminPanel>}>
            {" "}
          </Route>
          <Route path="inputData" element={<InputData></InputData>}>
            {" "}
          </Route>
          <Route path="manageData" element={<ManageData></ManageData>}>
            {" "}
          </Route>
          <Route path="allUser" element={<AllUser></AllUser>}>
            {" "}
          </Route>
>>>>>>> 765de6927360440750e741d713cbb1dca13438d4
        </Route>


        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/contactUs" element={<ContactMe />} />
<<<<<<< HEAD

        {/* test home */}
        <Route path="/home2" element={<Home2 />}></Route>
=======
        <Route path="/quizSec" element={<Quiz/>} />
        <Route path="/quiz" element={<QuizQuestions/>} />
        <Route path="/result" element={<Result/>} />
>>>>>>> 765de6927360440750e741d713cbb1dca13438d4
      </Routes>
      {/* <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
}

export default App;
