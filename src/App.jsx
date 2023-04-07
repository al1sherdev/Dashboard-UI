import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

// pages
import Billing from "./pages/Billing/Billing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Tables from "./pages/Tables/Tables";


function App({ setToken }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode", darkMode);
    body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div>
        <Sidebar setToken={ setToken } />
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
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