import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import SubmissionForm from "./components/forms/SubmissionForm";
import Registration from "./components/auth/Registration";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

// wrap app in user context to update jwt state and avoid refresh
export const UserContext = React.createContext();

const App = () => {
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"))
  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card/:id" element={<CardDetails />} />

              <Route path="/create" element={<SubmissionForm />} />

              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
            </Routes>
            <Footer />
            <ToastContainer />
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </UserContext.Provider>
  );
};

export default App;
