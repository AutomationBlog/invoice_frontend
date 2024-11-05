import WIP from "./pages/wip.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/Signup.jsx";
import LogIn from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import authUser from "./utils/authUser.js";
import PropTypes from "prop-types";
import Payment from "./pages/Payment.jsx";

function App() {
  let userAuth = authUser();
  const ProtectedRoute = ({ children }) => {
    if (!userAuth) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const AuthenticatedUser = ({ children }) => {
    if (userAuth) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };
  const routes = (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <AuthenticatedUser>
            <Home />
          </AuthenticatedUser>
        }
      />
      <Route
        path="/signup"
        exact
        element={
          <AuthenticatedUser>
            <SignUp />
          </AuthenticatedUser>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <AuthenticatedUser>
            <LogIn />
          </AuthenticatedUser>
        }
      />
      <Route
        path="/dashboard"
        exact
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/payment/:paymentToken" exact element={<Payment />} />
    </Routes>
  );

  return import.meta.env.VITE_WIP === "true" ? <WIP /> : <div>{routes}</div>;
}

export default App;

App.propTypes = {
  children: PropTypes.node,
};
