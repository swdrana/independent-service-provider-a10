import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import banner from '../../images/hand-holding-smartphone-with-tutor-screen.jpg'
import banner from "../../images/Webinar-bro.svg";
const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="row banner">
        <div className="col-md-6 px-5 py-5 d-flex align-items-center ">
          <div className="">
            <h1 className="text-start">
              Learn with <span className="orange">Rana</span> anytime anywhere
            </h1>
            <h4 className="text-start py-5  pe-5">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </h4>
            <Button
              className=" btn-danger"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create Account
            </Button>
          </div>
        </div>
        <div className="col-md-6  banner-pik d-flex justify-content-center align-items-center">
          <img src={banner} className="image-fluid" alt="" height="500px"/>
          {/* <img src="https://e-tutor-html.netlify.app/assets/images/hero-thumb.jpg" className="img-fluid" alt="" /> */}
        </div>
      </div>
      <div className="catagory container my-5 py-3">
        <h1 className="text-center ">Browse with top category</h1>
      </div>
    </>
  );
};

export default Home;