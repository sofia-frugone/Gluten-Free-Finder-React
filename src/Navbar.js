const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
              <img src="./gff-logo.svg" alt="navbar logo" />
            </div>

            <h1>Gluten Free Finder</h1>
            <div className="links">
                <a href="/signin">Sign In</a>  
                <a href="/signup">Sign Up</a>           
            </div>
           
        </nav>
    );
}
 
export default Navbar;