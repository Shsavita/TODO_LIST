
import './App.css';
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Todos} from "./Components/Todos";
import {AddTodo} from "./Components/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("Deleting",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
  }

  const addTodo=(title, desc)=>{
    console.log("adding todo", title,desc)

    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      Sno:1,
      title:"HTML",
      desc:"Learn html"
    },
    {
      Sno:2,
      title:"CSS",
      desc:"practice CSS"
    },
    {
      Sno:3,
      title:"JAVASCRIPT",
      desc:"read about js"
    }
  ]);
  return (
    <> 
    <Header title="Full Stack to-do list"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
