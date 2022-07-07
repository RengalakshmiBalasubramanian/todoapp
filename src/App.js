//import functional component Addtodo and Todolist
import Addtodo from "./component/Addtodo/Addtodo.component";
import Todolist from "./component/Todolist/Todolist.component";
//importing React Name Space class and inbuilt functions 
import React from "react"

//js having jsx elements as a return

function App() {
//use state functional hook from React Name Space
//It returns an array where we getState (to storing data) and setState (updating state)  
//by array destructing we get getState and setState
  const [todos, setTodos] = React.useState(
    [
      {
        title: "Travel Plan",
        description: "Plan for Nigera"
      },
      {
        title: "Travel list",
        description: "List of item for the travel"
      }
    ]
  )

  //returing jsx 
  return (
    //className to style function
    <div className="App">
      {/*
        using todolist component to display multiple todos by sending
        todos state as property to todos
       */}  
      <Todolist todos={todos}/>
      {/*
        display Addtodo form component
      */}
      <Addtodo />
    </div>
  );
}

//exporting App module
export default App;
