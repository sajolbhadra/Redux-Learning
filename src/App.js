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
import AdminPanel from "./Component/Dashboard/User/AdminPanel";
import AddQuiz from "./Component/Dashboard/Admin/AddQuiz";
import InputData from "./Component/Dashboard/Admin/InputData";
import ManageData from "./Component/Dashboard/Admin/ManageData";
import TutorialIndex from "./Component/Tutorial/TutorialIndex";
import QuickStart from "./Component/Tutorial/QuickStart";
import ReduxEssentials from "./Component/Tutorial/ReduxEssentials";
import TypeScriptQuickStart from "./Component/Tutorial/TypeScriptQuickStart";
import Videos from "./Component/Tutorial/Videos";
import GettingStartedWithRedux from "./Component/Documentation/GettingStartedWithRedux";
import WhyRedux from "./Component/Documentation/WhyRedux";
import Installation from "./Component/Documentation/Installation";
import ContactMe from "./Shared/ContactMe/ContactMe";
import Dashboard from "./Component/Dashboard/Dashboard";
import RequireAdmin from "./Component/Authentication/RequireAdmin";
import RequireAuth from "./Component/Authentication/RequireAuth";
import AllUsers from "./Component/Dashboard/Admin/AllUsers";
import Profile from "./Component/Dashboard/Profile/Profile";
import Review from "./Component/Dashboard/User/AddReview";
import Analysis from "./Component/Dashboard/User/Analysis";
import Home2 from "./Component/Home2/Home2";
import CoreConcepts from "./Component/Documentation/CoreConcepts";
import Quiz from "./Component/Quiz/Quiz";
import QuizQuestions from "./Component/Quiz/QuizQuestions.jsx";
import Result from "./Component/Result/Result";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Shared/Theme/Theme";

import ShowAnswer from "./Component/Result/ShowAnswer";
import ScrollToTop from "./Shared/ScrollToTop";

import Certificate from "./Component/Certificate/Certificate";

import MyClasses from "./Component/UserClasses/MyClasses";
import Forum from "./Component/Forum/Forum";
import Chat from "./Shared/Chat";
import Demo from "./Component/Documentation/Demo/Demo";

import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "./Features/Routes/routesSlice";
import Edit from "./Component/Documentation/Edit";
import Example from "./Component/Documentation/Example";
import Experiences from "./Component/Dashboard/Profile/Experiences";
import UserProfile from "./Component/Dashboard/UserProfile";
import Educations from "./Component/Dashboard/Profile/Educations";
import Skills from "./Component/Dashboard/Profile/Skills";

function App() {
  const dispatch = useDispatch();
  const { isLoading, routes, error } = useSelector((state) => state.routes);
  const [theme, setTheme] = useState("dark");

  // console.log(routes);

  useEffect(() => {
    dispatch(fetchRoutes());
  }, [dispatch]);

  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
    `;

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);

    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  // Google translate
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,hi,ar",
      },
      "google_translate_element"
    );
  };

  return (
    // <div>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ScrollToTop />
      <StyledApp>
        <Navbar themeToggler={themeToggler} theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/myClasses"
            element={
              <RequireAuth>
                <MyClasses />
              </RequireAuth>
            }
          >
            {routes &&
              routes.map((route) =>
                route.content.map((a) => (
                  <Route path={`${a.pathRoute}`} element={<Edit />} />
                ))
              )}
          </Route>

          <Route path="/" element={<Home2 />} />
          <Route path="/home" element={<Home2 />} />

          {/* tutorial */}
          <Route path="/gettingStarted" element={<GettingStarted />}>
            <Route
              path="tutorial"
              element={<TutorialIndex></TutorialIndex>}
            ></Route>

            <Route
              path="quickStart"
              element={<QuickStart></QuickStart>}
            ></Route>
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

          {/* quiz */}
          <Route path="/quizSec" element={<Quiz />} />
          <Route path="/quiz/:name" element={<QuizQuestions />} />
          <Route
            path="/result"
            element={
              <RequireAuth>
                <Result />
              </RequireAuth>
            }
          />
          <Route
            path="/answer"
            element={
              <RequireAuth>
                <ShowAnswer />
              </RequireAuth>
            }
          ></Route>

          {/* forum  */}
          <Route
            path="/forum"
            element={
              <RequireAuth>
                <Forum />
              </RequireAuth>
            }
          ></Route>

          {/* Getting Started */}
          <Route path="/gettingStarted" element={<GettingStarted />}>
            <Route index element={<GettingStartedWithRedux />} />
            <Route path="installation" element={<Installation />} />
            <Route path="whyReduxToolkit" element={<WhyRedux />} />
            <Route path="coreConcept" element={<CoreConcepts />} />
            <Route path="example" element={<Example />} />
          </Route>

          {/* user Section  */}

          {/* Extra Route  */}
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signUp" element={<SignUp></SignUp>} />
          <Route path="*" element={<NotFound></NotFound>} />
          <Route path="/contactUs" element={<ContactMe />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            {/* certificate */}

            <Route path="certificate" element={<Certificate />}></Route>
            <Route path="analysis" element={<Analysis />}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="adminPanel" element={<AdminPanel />}></Route>
            <Route path="profile" element={<UserProfile></UserProfile>}>
              <Route index path="" element={<Profile></Profile>} />
              <Route path="experience" element={<Experiences></Experiences>} />
              <Route path="education" element={<Educations></Educations>} />
              <Route path="skills" element={<Skills></Skills>} />
            </Route>

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
                  <InputData />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageData"
              element={
                <RequireAdmin>
                  <ManageData />
                </RequireAdmin>
              }
            ></Route>

            <Route
              path="addQuiz"
              element={
                <RequireAdmin>
                  <AddQuiz />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </StyledApp>
      <Chat></Chat>
    </ThemeProvider>
    // </div>
  );
}

export default App;
