import { Accordion, Badge, Button, Cardc,Col,Row,Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import img from './images.png'
import reactimg from './reactt.png'

import javascriptimg from './javascript.png'
import React from 'react'

function TopicQuiz() {
  return (
   <MainScreen title='Welcome to Quizzy'> 
    <Row>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            
            <Card.Title>HTML</Card.Title>
            <Card.Text>
            HTML is a markup language used to structure and present content on the web.
            <br />
            </Card.Text>
            <Button variant="primary">Let's take the quiz</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactimg} />
          <Card.Body>
            <Card.Title>REACT</Card.Title>
            <Card.Text>
            React is a JavaScript library for building user interfaces, primarily using components to create reusable UI elements.

            </Card.Text>
            <Button variant="primary">Let's take the quiz</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={javascriptimg} style={{ width: '200PX' , height:'270px'}}/>
          <Card.Body>
            <Card.Title>JAVASCRIPT</Card.Title>
            <Card.Text>
             
JavaScript is a versatile,used for web development to create interactive and dynamic web pages.
<br />
<br />

            </Card.Text>
            <Button variant="primary">Let's take the quiz</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
   
   </MainScreen>
  )
}

export default TopicQuiz
