import {Form, Button} from 'react-bootstrap';

const ContactForm = () => {
    return(<Form className="form-container">
    <Form.Group className="mb-4" controlId='form-name'>
           <Form.Label>Name</Form.Label>
           <Form.Control type='text' required placeholder='Enter your Name'></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4" controlId='form-emailId'>
           <Form.Label>Email</Form.Label>
           <Form.Control type='email' required placeholder='Enter your Email Address'></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4" controlId='form-feedback'>
           <Form.Label>Feedback</Form.Label>
            <Form.Control as={`textarea`} row={7} style={{height:'100px'}} placeholder="Enter you Feedback" />
        </Form.Group>
        <Button type='submit'>Submit</Button>
    </Form>)
}

export default ContactForm;