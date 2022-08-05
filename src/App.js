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
import AdminPanel from "./Component/Dashboard/Admin/AdminPanel";
import AddQuiz from "./Component/Dashboard/Admin/AddQuiz";
import InputData from "./Component/Dashboard/Admin/InputData";
import ManageData from "./Component/Dashboard/Admin/ManageData";
import TutorialIndex from "./Component/Tutorial/TutorialIndex";
import QuickStart from "./Component/Tutorial/QuickStart";
import ReduxEssentials from "./Component/Tutorial/ReduxEssentials";
import TypeScriptQuickStart from "./Component/Tutorial/TypeScriptQuickStart";
import Videos from "./Component/Tutorial/Videos";
import GettingStartedWithRedux from "./Component/Documentation/GettingStartedWithRedux/GettingStartedWithRedux";
import Installation from "./Component/Documentation/Installation/Installation";
import ContactMe from "./Shared/ContactMe/ContactMe";
import Quiz from "./Component/Quiz/Quiz";
import QuizQuestions from "./Component/Quiz/QuizQuestions.jsx";
import Result from "./Component/Result/Result";

import Dashboard from './Component/Dashboard/Dashboard';
import RequireAdmin from './Component/Authentication/RequireAdmin';
import RequireAuth from './Component/Authentication/RequireAuth';
import AllUsers from './Component/Dashboard/Admin/AllUsers';
import Profile from './Component/Dashboard/Profile';
import Review from './Component/Dashboard/Review';
import Analysis from "./Component/Dashboard/Analysis";
import Home2 from "./Component/Home2/Home2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2/>} />
        <Route path="/home" element={<Home2/>} />
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
        <Route
          path="/gettingStarted"
          element={<GettingStarted />}
        >
          <Route path="getting-started" element={<GettingStartedWithRedux />} />
          <Route path="installation" element={<Installation />} />

        </Route>
        <Route path="/tutorial" element={<Tutorial></Tutorial>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />


        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/contactUs" element={<ContactMe />} />
        <Route path="/quizSec" element={<Quiz />} />
        <Route path="/quiz" element={<QuizQuestions />} />
        <Route path="/result" element={<Result />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="analysis" element={<Analysis/>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="inputData"
            element={
              <RequireAdmin>
                <InputData/>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageData"
            element={
              <RequireAdmin>
                <ManageData/>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="adminPanel"
            element={
              <RequireAdmin>
                <AdminPanel/>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addQuiz"
            element={
              <RequireAdmin>
                <AddQuiz/>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/contactUs" element={<ContactMe />} />

        {/* test home */}
        <Route path="/home2" element={<Home2 />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
