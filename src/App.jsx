import { Route, Routes } from "react-router-dom";
import DescriptionAlerts from "./components/Alert/Alert";

// components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Auth/Login";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

// pages
import Billing from "./pages/Billing/Billing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Tables from "./pages/Tables/Tables";

function App({ token, setToken }) {

  return (
    <div className="app">
      {
        // token ? ( <DescriptionAlerts /> ) : (null)
      }

      <Sidebar setToken={ setToken } />
      <Navbar />
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/tables" element={ <Tables /> } />
          <Route path="/billing" element={ <Billing />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/signin" element={ <SignIn /> } />
          <Route path="/signup" element={ <SignUp /> } />
        </Routes>
    </div>
  )
}

export default App;