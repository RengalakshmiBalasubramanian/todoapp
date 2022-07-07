// importing Form, Button, Container from the React Bootstrap
import { Form, Button, Container } from 'react-bootstrap'
//<h1> Add Todo</h1>
//label: Todo name
//input control type = "text" 
//label: Todo Description
//input control type = "text" 
//Button Save 

//Creaating function component Addtodo
function Addtodo() {
//return Jsx 
    return (
        <div>
            <Container>
            
            <h1 style={{textAlign:"center"}}> Add Todo</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Label>Todo Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" />

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