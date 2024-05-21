
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col,Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import axios from 'axios';
import MainScreen from "../../components/MainScreen";
import "./RegisterScreen.css";
import { useNavigate } from 'react-router-dom';
import { register } from "../../actions/userActions";
function RegisterScreen() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  // const [error, setError]= useState(false);
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;







  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "quizApp");
      data.append("cloud_name", "dub9dgblf");
      fetch("https://api.cloudinary.com/v1_1/dub9dgblf/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useEffect(() => {
    if (userInfo) {
    
      navigate("/");
    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));


  //   if (password !== confirmpassword) {
  //     setMessage("Passwords do not match");
  //   } else {
  //     setMessage(null)
  //     setLoading(true);
  //   }try{
  //     const config = {
        
  //       headers:{

  //          "Content-type":"application/json"
  //      }
  //      }

  //      const {data} = await axios.post("http://localhost:5000/api/users",
  //      {
  //       name,
  //      email,
  //      password,
  //      pic

  //      },config);

  //      console.log(data);
  //      localStorage.setItem("userInfo", JSON.stringify(data));

  //  setLoading(false)



  //   }catch(error){
  //     setError(error.response.data.message);
  //     setLoading(false)

  //   }
  //  console.log(email)
  };



  return (
   
<Container className="register-main-screen">
    <Row className="register-container">
    <Col md={4} className="register-side">
                    <div className="new-here"> Have an Account?</div>
                    <Link to="/login" className="register-up-link">Login</Link>
                </Col>
    <Col md={8} className="register-form">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}
            <Form className="register-form" onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmpassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                {picMessage && (
                    <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
                )}
                <Form.Group controlId="pic">
                    <Form.Label>Profile Picture</Form.Label>
                    <div className="profilePicContainer">
                        <img src={pic} alt="Profile" className="profilePic" />
                        <Form.Control
                            type="file"
                            label="Upload Profile Picture"
                            onChange={(e) => postDetails(e.target.files[0])}
                            accept="image/*"
                        />
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="register-button">
                    Register
                </Button>
            </Form>
        

            {/* <Row className="py-3">
                <Col>
                    Have an Account? <Link to="/login" className="sign-up-link">Login</Link>
                </Col>
            </Row> */}
      </Col>
    
    </Row>
</Container>
  )
}

export default RegisterScreen
