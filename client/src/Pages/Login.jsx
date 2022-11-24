import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Logincss from '../css/login.css'
import SetDetails from "../Redux/action";




const Login = () => {

  const navigate=useNavigate();
  const dispatch =useDispatch();
  const[LoginDeatils,SetLoginDeatils]= useState({
    email:"",
    password:"",
  })

  const handleSubmit=async()=>{
    try{
      const res=await fetch("/login",{
        method: "POST",
        mode:"cors",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(
          LoginDeatils
        )
      })


      const data=await res.json();
      console.log(data)
      window.alert(data.message);

      if(data.status === 200){
         dispatch(SetDetails(data.data));
         navigate('/about');
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />

      <div className="mt-5 d-flex flex-column justify-content-center align-items-center "> 
        <div>
          <h4 className="fw-bold ">Login Here</h4>
        </div>

        <div className="mt-5">
          
            <div className="input-group flex-nowrap">
             
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="addon-wrapping"
                name="Email="
                vlaue={LoginDeatils.email}
                onChange={(e)=>{
                  SetLoginDeatils({...LoginDeatils,email:e.target.value});
                }}
              />
            </div>
            <div className="input-group flex-nowrap mt-3">
             
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Email"
                aria-describedby="addon-wrapping"
                name="password"
                value={LoginDeatils.password}
                onChange={(e)=>{
                  SetLoginDeatils({...LoginDeatils,password:e.target.value})
                }}
              />
            </div>
            <div className="mt-4 d-flex justify-content-center" >
            <button   className="btn btn-success" onClick={() =>{
              handleSubmit();
            }}>Success</button>
            
            
          </div>
          
        </div>

        <div className="mt-4 fw-semibold" >
            <p >Not Register Yet <span className="fw-bold text-primary" ><Link to="/register">Click Here</Link></span> </p>
        </div>

        <div className="d-flex my-3" >
            
                <div className="mx-3 link" >
                    <img src={require('../assets/google.png')} alt="google"   />
                </div>
            
            
                <div className="mx-3 link" >
                    <img src={require('../assets/github-sign.png')} alt="github"  />
                </div>
                
            
            
                <div className="mx-3 link" >
                    <img src={require('../assets/meta.png')}  alt="meta" />
                </div>
                
            
           
                <div className="mx-3 link">
                    <img src={require('../assets/twitter.png')} alt="twitter"  />
                </div>    
                
            
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Login;
