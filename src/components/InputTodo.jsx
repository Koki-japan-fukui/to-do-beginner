import React from 'react'

export const InputTodo = (props) => {
    const{Todotext,onChange,Addtodo}=props
  return (
    <>    
           <input type="text" value={Todotext} onChange={onChange}/>
           <button onClick={Addtodo}>追加</button>
    </>
  )
}
