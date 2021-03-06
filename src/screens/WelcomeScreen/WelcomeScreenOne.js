import React, { useState } from "react";
import "./WelcomeScreen.css";
import { Form, ProgressBar, Button } from "react-bootstrap";
import BackIcon from "./icons8-back-64.png";
import { Link } from 'react-router-dom'

const WelcomeScreenOne = ({history}) => {
  const [choice, setChoice] = useState("PayPal");


  const nextButton = (e) => {
    e.preventDefault()
    console.log('working')
    history.push("/onboardingTwo")
  }
  return (
    <div className="displayOn">
      <div>
        <h1>Hi Jenni</h1>
        <p>
          {" "}
          This survey will help your employer plan a safe return to the office
        </p>
      </div>

      <div className="formPrefix">
        <Form onSubmit={nextButton}>
          <div className="_header">
            <img src={BackIcon} className="back_icon"/>
            <div  className="formLabel" style={{margin:"auto",fontSize:20}}>
              Are you planning on getting vaccinated for COVID-19?
            </div>
          </div>

          <Form.Check
            type="radio"
            label="Yes"
            id="Paypal"
            name="choice"
            value="Yes"
       
            //onChange={(e) => setPaymentMethod(e.target.value)}
            className="formCheck"
          ></Form.Check>

          <Form.Check
            type="radio"
            label="No"
            id="Paypal"
            name="choice"
            value="No"
         
            //onChange={(e) => setPaymentMethod(e.target.value)}
            className="formCheck"
          ></Form.Check>

          <Form.Check
            type="radio"
            label="Undecided"
            id="Paypal"
            name="paymentMethod"
            value="Undecided"
       
            //onChange={(e) => setPaymentMethod(e.target.value)}
            className="formCheck"
          ></Form.Check>
        </Form>

        <ProgressBar now={10} className="progressbar" />


      </div>



       
       <div className="_next_btn_footer">
     
       <Link  to='/onboardingTwo'>
          
      <Button bsPrefix="buttonstyle"
       type="submit"
      >
       Next
        
    </Button>
         
         </Link>
       
 

      </div>
       
       




    </div>
  );
};

export default WelcomeScreenOne;
