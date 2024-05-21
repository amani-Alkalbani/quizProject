
import React from 'react';
import { Form, Button, Row, Col, Container, Image } from 'react-bootstrap';
import './AdminStyles.css'; 
import qImage from './quizzy.png';

const AddQuestionForm = () => {
    return (
        <Container className="add-question-form mt-5">
            <Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Image src={qImage} className="img-fluid" alt="Discussion" />
                </Col>
                <Col md={6}>
                    <h2 className="text-center text-primary mb-4">Add Questions</h2>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="formQuestion">
                            <Form.Label>Question</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter question" />
                        </Form.Group>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Form.Group key={idx} controlId={`formOption${idx}`}>
                                <Form.Label>Option {idx}</Form.Label>
                                <Form.Control type="text" placeholder={`Enter option ${idx}`} />
                            </Form.Group>
                        ))}
                        <Form.Group controlId="formAnswer">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control type="text" placeholder="Enter answer" />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="button">
                                Upload
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddQuestionForm;
