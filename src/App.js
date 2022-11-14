import './App.css';
import SignUp from './components/SignUp'
import Home from './components/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'








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
            <Link to="/signin">Sign In</Link>  
            <Link to="/signup">Sign Up</Link>  
            <Link to="/create">Create New Post</Link>          
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>

          </Routes>
        <Footer />
        </BrowserRouter>

        

          


         
         
         
            
            

          
      </div>
    
  );
}

export default App;
