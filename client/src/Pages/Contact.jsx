import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Cardcss from "../css/Card.css";
import Contactcss from '../css/Contact.css';

const Contact = () => {

  const data=useSelector(state=>state.SETUSER);
  return (
    <>
      <Navbar />
      <div className="mt-3 mx-5">
        <h4>Our Branches:</h4>
      </div>
      <div className="card-box d-flex justify-content-around mt-5">
        <div class="card text-white bg-dark  mb-3 card-style">
          <div class="card-header">  CBSE BORDS COACHING CENTER</div>
          <div class="card-body">
            <h5 class="card-title">Best Teachers of 10<sup>th</sup>/12<sup>th</sup> Now In Your State</h5>
            <p class="card-text">
              Top Result in board's from last 10 years
              Now You Can Also Grad Your Bright Career Opportunity
            </p>
          </div>
        </div>

        <div class="card text-white bg-info mb-3 card-style">
          <div class="card-header">  JEE/NEET</div>
          <div class="card-body">
            <h5 class="card-title">Top IIT'S Faculties</h5>
            <p class="card-text">
              Complete Your Dream To Select In Top IIT'S AND NIT'S With The 
              The Help Of Us Best Faculties
            </p>
          </div>
        </div>

        <div class="card text-white bg-success mb-3 card-style">
          <div class="card-header">  GATE/ILETS/CAT</div>
          <div class="card-body">
            <h5 class="card-title">All Among Famous GATE/CAT </h5>
            <p class="card-text">
              Pursue Your Master In Your Dream Collage
              We Are Here To Help You
            </p>
          </div>
        </div>
      </div>

      <div className="card-box d-flex justify-content-around mt-5">
        <div class="card text-white bg-danger  mb-3 card-style">
          <div class="card-header">  UPSE/  SSC/  PCS</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card text-white bg-secondary mb-3 card-style">
          <div class="card-header">  NDA/CDS</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card text-dark bg-light mb-3 card-style">
          <div class="card-header">ENGLISH COACHING CENTER</div>
          <div class="card-body">
            <h5 class="card-title">Header</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

    {
      data==null?(<span></span>):(
        <div className="feedback-form">
        <div>
            <div className="mt-3 mx-5">
              <h4>Feedback:</h4>
            </div>
        </div>
  
        <div className="contact-form mt-3">
         <form action="">
          <div class="input-group feedback-form">
            <textarea class="form-control" aria-label="With textarea" placeholder="Write Your Feedback Here..." rows="6" ></textarea>
          </div>
          <div className="mt-3" >
          <button type="button" class="btn btn-success w-100 h-100">
              Submit
            </button>
          </div>
         </form>
        </div>
      </div>
      )
    }

   
      
      <div className="mt-3 ">
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
