import React, {useState} from 'react'
import './WelcomeScreen.css'
import { Form} from 'react-bootstrap'

const WelcomeScreenOne = () => {

    const [choice, setChoice] = useState('PayPal')
    return (
        <>
        <div className="welcomeScreen">
        <h1 >Hi Jenni</h1>
        <p> This survey will help your employer plan a safe return to the office</p>
          
          <div  className="formControl">
          <Form>
                <Form.Label
                        as='legend'
                        bsPrefix="formPrefix"
                    >
                    Are you planning on getting vaccinated for COVID-19?
                    </Form.Label>

                 
                    <Form.Check
                            type='radio'
                            label='Yes'
                            id='Paypal'
                            name='choice'
                            value='Yes'
                            checked
                            //onChange={(e) => setPaymentMethod(e.target.value)}
                            bsPrefix="formCheck"
                        >
                            
                        </Form.Check >

                        <Form.Check
                            type='radio'
                            label='No'
                            id='Paypal'
                            name='choice'
                            value='No'
                            checked
                            //onChange={(e) => setPaymentMethod(e.target.value)}
                            bsPrefix="formCheck"
                        >
                            
                        </Form.Check>

                        <Form.Check
                            type='radio'
                            label='Undecided'
                            id='Paypal'
                            name='paymentMethod'
                            value='Undecided'
                            checked
                            //onChange={(e) => setPaymentMethod(e.target.value)}
                            bsPrefix="formCheck"
                        >
                            
                        </Form.Check>

                </Form>

          </div>

        </div>
        </>
    )
}

export default WelcomeScreenOne
