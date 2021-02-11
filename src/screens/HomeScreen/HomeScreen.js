import React , {useState, useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap'
import './HomeScreen.css'
import logo from './Finallogo.png'
const HomeScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        history.push("/onboardingOne")
    }

    return (

        <Col md={6} className="HomeScreen">
        <Col md={12} >
            <div className="_headerone">

         <Image src={logo} rounded  rounded className="_image"/>
        <h1 className="headerClass">Vaccine Tracker</h1>
            </div>

        <Form onSubmit={submitHandler} >
                    <Form.Group controlId='email' bsPrefix="fgroup" >
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>

                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >


                            </Form.Control>
                    </Form.Group>

                    <p className="forgotPassword"> 
                    <span className="_forgot_txt">
                    
                    Forgot password
                    </span>
                    </p>
                    <div className="_footer">


                    <Button
                    type="submit"
                    variant='primary'
                    className="buttonClass"
                    >
                        Login In
                    </Button>
                        </div>
                </Form>
        </Col>
        
  
        </Col>

       

    )
}

export default HomeScreen
