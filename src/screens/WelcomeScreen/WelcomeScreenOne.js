import React, {useState} from 'react'
import './WelcomeScreen.css'
import { Form,ProgressBar, Button} from 'react-bootstrap'

const WelcomeScreenOne = () => {

    const [choice, setChoice] = useState('PayPal')
    return (
        <div className="displayOn">
        <div >
        <h1 >Hi Jenni</h1>
        <p> This survey will help your employer plan a safe return to the office</p>
        </div>

        <div className="formPrefix">
          <Form>
                <Form.Label
                        as='legend'
                        className="formLabel"
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
                            className="formCheck"
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
                            className="formCheck"
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
                            className="formCheck"
                        >
                            
                        </Form.Check>
                </Form>


                <ProgressBar now={10} className="progressbar"/>
          </div>

                <Button bsPrefix="buttonstyle">
                    Next
                </Button>
        </div>
    )
}

export default WelcomeScreenOne
