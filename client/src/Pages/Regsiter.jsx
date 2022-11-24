import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Register = () => {

  const navigate=useNavigate();
  const [RegistrationDetails, SetRegistrationDetails] = useState({
    name: "",
    age: "",
    email: "",
    dob: "",
    address: "",
    mobNo: "",
    gender: "",
    about: "",
    password: "",
  });


  const handleSubmit = async() => {
   
    
     try{

      console.log("Inside Try bLOCKE")
      const data=await fetch('/register',{
        method:"POST",
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(
          RegistrationDetails
        )
      })


      const res=await data.json();      
      window.alert(res.message)

      if(res.status==200){
        navigate('/login')
      }
    }
    catch(err){
      console.log(err)
    }
     
  }
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-center h1 fw-semibold mt-3">
        <h1>Registration Form</h1>
      </div>

      <div className="mx-5 mt-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ENTER YOUR NAME HERE"
            aria-label="Name"
            aria-describedby="basic-addon1"
            name="name"
            value={RegistrationDetails.name}
            onChange={(e) => {
              SetRegistrationDetails({ ...RegistrationDetails,name: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Age
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ENTER YOUR AGE HERE"
            aria-label="Age"
            aria-describedby="basic-addon1"
            name="age"
            value={RegistrationDetails.age}
            onChange={(e) => {
              SetRegistrationDetails({...RegistrationDetails, age: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="ENTER YOUR EMAIL HERE"
            aria-label="Email"
            aria-describedby="basic-addon1"
            name="email"
            value={RegistrationDetails.email}
            onChange={(e) => {
              SetRegistrationDetails({...RegistrationDetails, email: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            DOB
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="ENTER YOUR BIRTH DATE HERE"
            aria-label="DOB"
            aria-describedby="basic-addon1"
            name="dob"
            value={RegistrationDetails.dob}
            onChange={(e) => {
              SetRegistrationDetails({...RegistrationDetails, dob: e.target.value });
            }}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Address
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ENTER YOUR ADDRESS HERE"
            aria-label="Address"
            aria-describedby="basic-addon1"
            name="address"
            value={RegistrationDetails.address}
            onChange={(e) => {
              SetRegistrationDetails({ ...RegistrationDetails,address: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Mob.No
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ENTER YOUR MOBILE NUMBER HERE"
            aria-label="Mobile Number"
            aria-describedby="basic-addon1"
            name="mobNo"
            value={RegistrationDetails.mobNo}
            onChange={(e) => {
              SetRegistrationDetails({...RegistrationDetails, mobNo: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" forname="inputGroupSelect01">
            Gender
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            name="gender"
            value={RegistrationDetails.gender}
            onChange={(e)=>{
              SetRegistrationDetails({...RegistrationDetails,gender: e.target.value})
            }}
          >
            <option defaultValue>Choose Your Gender Here...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">About Your Self</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Write Something About Your Self..."
            name="about"
            value={RegistrationDetails.about}
            onChange={(e)=>{
              SetRegistrationDetails({...RegistrationDetails,about: e.target.value})
            }}
          ></textarea>
        </div>
        <div className="input-group mb-3 mt-3">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text" forname="inputGroupFile02">
            Upload
          </label>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="ENTER YOUR PASSWORD HERE"
            aria-label="Name"
            aria-describedby="basic-addon1"
            name="password"
            value={RegistrationDetails.password}
            onChange={(e)=>{
              SetRegistrationDetails({...RegistrationDetails, password: e.target.value})
            }}
          />
        </div>

        <div className="mt-3">
          <button type="button" className="btn btn-success w-100 h-100" onClick={()=>{
            handleSubmit();
          }} >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default Register;
