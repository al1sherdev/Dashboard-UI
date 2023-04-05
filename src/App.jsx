import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Auth/Login";

// pages
import Billing from "./pages/Billing/Billing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Signin from "./pages/Signin/Signin";
import Tables from "./pages/Tables/Tables";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Sidebar />
          <Navbar />
            <Routes>
              <Route path="/" element={ <Dashboard /> } />
              <Route path="/tables" element={ <Tables /> } />
              <Route path="/billing" element={ <Billing />} />
              <Route path="/profile" element={ <Profile />} />
              <Route path="/signin" element={ <Login /> } />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;