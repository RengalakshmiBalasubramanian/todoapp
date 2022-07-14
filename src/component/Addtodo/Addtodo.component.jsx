// importing Form, Button, Container from the React Bootstrap
import { Form, Button, Container } from 'react-bootstrap'
//<h1> Add Todo</h1>
//label: Todo name
//input control type = "text" 
//label: Todo Description
//input control type = "text" 
//Button Save 
//Creating function component Addtodo
function Addtodo(props) {
    
//return Jsx 
    return (
        <div>
            <Container>            
            <h1 style={{textAlign:"center"}}> Add Todo</h1>
            
                <Form onSubmit={props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo name</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter name" />
                        <Form.Label>Todo Description</Form.Label>
                        <Form.Control name="description" type="text" placeholder="Enter description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
//export Addtodo module
export default Addtodo