import './App.css';
import Home from './components/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import CardDetails from './components/card/CardDetails';
import SubmissionForm from './components/forms/SubmissionForm';
import Registration from './components/auth/Registration';



const App = () => {
  return (

      <div className="App">
        <BrowserRouter>
        <nav className="navbar">
          <div className="logo">
            <img src="./gff-logo.svg" alt="navbar logo" />
          </div>
          <h1>Gluten Free Finder</h1>
          <div className="links">
            <Link to="/">Home</Link> 
            <Link to="/registration">Sign Up</Link>  
            <Link to="/create">Create New Post</Link>          
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/card/:id" element={< CardDetails/>}/>
            <Route path="/create" element={< SubmissionForm/>}/>
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
