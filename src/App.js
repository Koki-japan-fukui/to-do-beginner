import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { InputTodo } from './components/InputTodo';

function App() {
    const [Todotext,setTodotext]=useState("");
    const [IncompleteTodo,setIncompleteTodo]=useState([]);
    const [completeTodo,setcompleteTodo]=useState([]);

     const onChange=(event)=>{
       setTodotext(event.target.value);
    
     }

     const Addtodo=()=>{
       const newTodos=[...IncompleteTodo,Todotext]
       setIncompleteTodo(newTodos);
       setTodotext("");
     }

     const Addcomplete=(index)=>{
      const newTodos=[...completeTodo,IncompleteTodo[index]]
      const newIncompleteTodos=[...IncompleteTodo];
      newIncompleteTodos.splice(index,1);
     setcompleteTodo(newTodos);
     setIncompleteTodo(newIncompleteTodos);
     }
     const Deletecomplete=(index)=>{
      const newIncompleteTodos=[...IncompleteTodo];
      newIncompleteTodos.splice(index,1);
      setIncompleteTodo(newIncompleteTodos);

     }

     const BackIncomplete=(index)=>{
      const newIncompleteTodos=[...IncompleteTodo,completeTodo[index]];
      const newcompleteTodos=[...completeTodo];
      newcompleteTodos.splice(index,1);
      setcompleteTodo(newcompleteTodos);
      setIncompleteTodo(newIncompleteTodos);

     }

  return (
    <div className="App">
        <InputTodo Todotext={Todotext} onChange={onChange} Addtodo={Addtodo}/>
        <div class="incommplete-area">
          <ul>
            {IncompleteTodo.map((todo,index)=>{
              return(
              <li key={todo}>
                <p>{todo}</p> 
                <button onClick={()=>{Addcomplete(index)}}>完了</button>
                <button onClick={()=>{Deletecomplete(index)}}>削除</button>
              </li>
              );
            })}
          </ul>
        </div>
        <div class="complete-area">
        <ul>
            {completeTodo.map((todo,index)=>{
              return(
              <li key={todo}>
                <p>{todo}</p> 
                <button onClick={()=>{BackIncomplete(index)}}>戻す</button>
              </li>
              );
            })}
          </ul>

          
        </div>
    </div>
  );
}

export default App;
