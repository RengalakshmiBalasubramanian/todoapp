//importing Container and ListGroup from React Bootstrap
import { Container, ListGroup } from 'react-bootstrap'

//creating function for Todolist component
function Todolist(props) {
//getting  property as parameter (props)
    return (
        //returing jsx
        <div>
            <Container>
                <h1>Todo List</h1>
                <ListGroup>
                {/*
                    getting todos property from props 
                    map is the array function as todos is an array
                    map fuction used for iteration of value
                    use dot notation get value 

                */}
                    {
                        props.todos.map((value, index) =>
                        (
                            <div>
                                <ListGroup.Item>{value.title} </ListGroup.Item>

                                <ListGroup.Item>{value.description} </ListGroup.Item>

                            </div>
                        )

                        )
                    }
                    </ListGroup>

            </Container>
        </div>
    )
}

//exporting Todolist module
export default Todolist;