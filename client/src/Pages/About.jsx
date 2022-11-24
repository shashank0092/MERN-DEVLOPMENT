import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {useSelector} from 'react-redux';


const About=()=>{

    const data=useSelector(state=>state.SETUSER);

    

    return(
        <>
            <Navbar/>
            
            <div className="user-details d-flex flex-column justify-content-center align-items-center" >

                <div >
                    <h1 className="user-details-heading my-4" >
                        User Details
                    </h1>
                </div>
                
                <div className="user-details-details my-3" >
                    <h4>Name:{data.name}</h4>
                    <h4>Age:{data.age}</h4>
                    <h4>Email:{data.email}</h4>

                    <h4>Date Of Birth:{data.dob.split("T")[0]}</h4>
               
                    <h4>Gender:{data.gender}</h4>
                </div>



            </div>
            

            <div className="mt-5">
                <Footer  />
            </div>            
        </>
    )
}

export default About;