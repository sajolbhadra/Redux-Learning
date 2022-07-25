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
import Installation from "./Component/Documentation/Installation/Installation";
import GettingStartedWithRedux from "./Component/Documentation/GettingStartedWithRedux/GettingStartedWithRedux";

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
          {/* <Route path="review" element={<Review></Review>}/>
          <Route path="profile" element={<Profile></Profile>}/>
          <Route path="payment/:id" element={<Payment></Payment>}/>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          />
          <Route
            path="addTool"
            element={
              <RequireAdmin>
                <AddTool></AddTool>
              </RequireAdmin>
            }
          />
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          />
          <Route
            path="manageTools"
            element={
              <RequireAdmin>
                <ManageTool></ManageTool>
              </RequireAdmin>
            }
          /> */}
        </Route>
        <Route path="/tutorial" element={<Tutorial></Tutorial>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
