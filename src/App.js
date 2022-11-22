import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import SubmissionForm from "./components/forms/SubmissionForm";
import Registration from "./components/auth/Registration";
import Footer from "./components/Footer";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Login from "./components/auth/Login";






const queryClient = new QueryClient();


const App = () => {

  return (
    
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <nav className="navbar">
            <div className="logo">
              <img src="/gff-logo.svg" alt="navbar logo" />
            </div>
            <h1>Gluten Free Finder</h1>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/registration">Sign Up</Link>
              <Link to="/create">Create New Post</Link>
              <Link to="/login">Sign In</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/card/:id" element={<CardDetails />} />
            <Route path="/create" element={<SubmissionForm />} />
            <Route path="/login" element={<Login />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
