import React , {useState, useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap'
import './HomeScreen.css'

const HomeScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        history.push("/onboardingOne")
    }

    return (
        <Row className="HomeScreen">

        <Col md={6} bsPrefix="firstColumn">
         <Image src="Finallogo.png" rounded  rounded/>
        <h1 className="headerClass">Vaccine Tracker</h1>
        </Col>


        <Col md={6}>

        <Form onSubmit={submitHandler}>
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

                    <p className="forgotPassword"> forgot password</p>

                    <Button
                    type="submit"
                    variant='primary'
                    className="buttonClass"
                    >
                        Login In
                    </Button>
                </Form>
        </Col>
        
  
        </Row>

       

    )
}

export default HomeScreen
