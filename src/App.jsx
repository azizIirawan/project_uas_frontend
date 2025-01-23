import React, {Suspense , useState} from "react"
import {BrowserRouter as Router,Routes,Route, NavLink} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Logout from "./components/Logout";
import ContactUs from './components/contact/ContactUs';

const Home = React.lazy( () => import("./components/Home"));
const MakananList = React.lazy ( () => import("./components/makanan/List"));
const TLMakananList = React.lazy ( ()=> import("./components/makanan/TList"));
const MakananCreate = React.lazy( () => import("./components/makanan/Create"));
const MakananEdit = React.lazy( () => import("./components/makanan/Edit"));
const TeamList = React.lazy ( () => import("./components/Team/List"));
const Login = React.lazy ( ()=> import("./components/Login"));
const LContact = React.lazy ( ()=> import("./components/contact/LContact"))

function App() {

  const [token,setToken] = useState(localStorage.getItem("authToken"))

  return(
      <Router>
        {/* Navbar */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">The Hunger</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className={ ({isActive}) =>`nav-link ${isActive?"active": ""}`}
                  aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/makanan">Makanan</a>
                </li>
                <li className="nav-item">
                  <NavLink className={ ({isActive}) =>`nav-link ${isActive?"active": ""}`}
                  aria-current="page" to="/team">Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={ ({isActive}) =>`nav-link ${isActive?"active": ""}`}
                  aria-current="page" to="/contact">Hubungi Kami</NavLink>
                </li>
                <li>
                  {token ? (
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink className="nav-livk" to="/login">
                      Login
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login setToken={setToken}/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/makanan" element={ !token ? (<TLMakananList/>
                ):(
                  <ProtectedRoute><MakananList/></ProtectedRoute>
                )
              }
            />
            <Route path="/makanan/create" element={<ProtectedRoute><MakananCreate/></ProtectedRoute>}/>
            <Route path="/makanan/edit/:id" element={<ProtectedRoute><MakananEdit/></ProtectedRoute>}/>
            <Route path="/Team" element={<ProtectedRoute><TeamList/></ProtectedRoute>}/>
            
          </Routes>
        </Suspense>
      </Router>
    )
  }


export default App
