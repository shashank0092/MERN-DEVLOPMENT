import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Regsiter";



const App=()=>{
  return(
    <>

        <BrowserRouter>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/*" element={<Error />}/>
            </Routes>

        </BrowserRouter>

    </>
  )
}


export default App;