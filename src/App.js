import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">

              <Link className="nav-link" to={'/sign-up'}>
                    SignUp
                   </Link>
               
                  <Link className="nav-link" to={'/sign-in'}>
                  Login
                  </Link>
                  {<Link className="nav-link" to={''}>
                  Searchn
                  </Link> }
                  <div className="nav.link">
                    {/* </Navbar>         */}
                  </div>
                                
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            
              <Route path="/sign-up" element={<SignUp />} />
              {/* <Route exact path="/" element={<Login />} /> */}
              <Route path="/sign-in" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}




export default App;
