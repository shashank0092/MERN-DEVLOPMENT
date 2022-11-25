import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {

  const data=useSelector(state=>state.SETUSER);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-light" to="/">
           <img src={require('../assets/college-graduation.png')} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
          </button>
          <div className="collapse navbar-collapse   " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">
                  Login
                </Link>
              </li>
                {
                  data==null?(<li className="nav-item">
                  <Link className="nav-link text-light" to="/register">
                    Regsiter
                  </Link>
                </li>):(<span></span>)
                }
               {
                  data==null?(<span></span>):(
                    <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li> 
                  )
               }
               {
                  data==null?(<span></span>):(
                    <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Payment
                </Link>
              </li> 
                  )
               }
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
