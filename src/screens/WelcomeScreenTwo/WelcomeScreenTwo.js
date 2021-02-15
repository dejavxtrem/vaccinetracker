import React, {useState} from 'react'
import './welcomescreentwo.css'
import { Form, ProgressBar, Button } from "react-bootstrap";
import BackIcon from "./icons8-back-64.png";


const WelcomeScreenTwo = () => {





    return (
        <div className="displayOn">
        <div>
          <h1>Hi Jenni</h1>
          <p>
            {" "}
            This survey will help your employer plan a safe return to the office
          </p>
        </div>
  
        <div className="formPrefix2">
          <Form>
            <div className="_header">
              <img src={BackIcon} className="back_icon"/>
              <div  className="formLabel" style={{margin:"auto",fontSize:20}}>
                Which vaccine do you plan on getting?
              </div>
            </div>
  
            <Form.Check
              type="radio"
              label="Pfizer"
              id="Paypal"
              name="choice"
              value="Pfizer"
           
              //onChange={(e) => setPaymentMethod(e.target.value)}
              className="formCheck"
            ></Form.Check>
  
            <Form.Check
              type="radio"
              label="Moderna"
              id="Paypal"
              name="choice"
              value="No"
             
              //onChange={(e) => setPaymentMethod(e.target.value)}
              className="formCheck"
            ></Form.Check>
  
            <Form.Check
              type="radio"
              label="Johnson & Johnson"
              id="Paypal"
              name="paymentMethod"
              value="Undecided"
         
              //onChange={(e) => setPaymentMethod(e.target.value)}
              className="formCheck"
            ></Form.Check>

            <Form.Check
              type="radio"
              label="AstraZeneca"
              id="Paypal"
              name="paymentMethod"
              value="AstraZeneca"
          
              //onChange={(e) => setPaymentMethod(e.target.value)}
              className="formCheck"
            ></Form.Check>

            <Form.Check
              type="radio"
              label="Unsure"
              id="Paypal"
              name="paymentMethod"
              value="Unsure"
            
              //onChange={(e) => setPaymentMethod(e.target.value)}
              className="formCheck"
            ></Form.Check>

          </Form>
  
          <ProgressBar now={40} className="progressbar" />
        </div>
        <div className="_next_btn_footertwo">
  
        <Button bsPrefix="buttonstyle"
        
        >Next</Button>
        </div>
      </div>
    )
}

export default WelcomeScreenTwo
