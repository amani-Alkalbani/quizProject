import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import Loading from "../../components/Loading";
import axios from 'axios';
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            if (userInfo.isAdmin === true) {
                navigate('/Admin');
            } else {
                navigate('/topicQuiz');
            }
        }
    }, [navigate, userInfo]);


   


    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    
    
    // useEffect(() => {
    
    //     localStorage.clear();
    //   }, []);

 


    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(login(email, password));



        // try {
        //     const config = {
        
        //      headers:{

        //         "Content-type":"application/json"
        //     }
        //     }

        //     setLoading(true)

        //     const {data} = await axios.post("http://localhost:5000/api/users/login",
        //         {
        //         email,
        //         password,
        //         },config);

        //         console.log(data);
        //         localStorage.setItem("userInfo", JSON.stringify(data));

        //     setLoading(false)

          
        
        //          navigate("/topicQuiz");
                
              
        

        //     } catch (error) {
        //         setError(error.response.data.message);
        //         setLoading(false)
        //     }
      };





    return (
        <Container className="login-main-screen">
           

            <Row className="login-container">
          
                <Col md={6} className="login-form">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

                {loading && <Loading />}
                    <h2>Login to Your Account</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                               value={email}
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                               value={password}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="success" type="submit" className="sign-in-button">
                            Sign In
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="login-side">
                    <div className="new-here">New Here?</div>
                    <Link to="/register" className="sign-up-link">Sign Up</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginScreen;