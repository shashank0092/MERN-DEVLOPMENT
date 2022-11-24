import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const Home=()=>{
    return(
        <>
            <Navbar/> 
            <h1>This is Home Page</h1>    
            <div className="mt-4">
                <Footer/>
            </div>
        </>
    )
}

export default Home;