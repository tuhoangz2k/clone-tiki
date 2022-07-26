import React from 'react';



function TodoList({todos,onTodoClick}) {

    const todoOnClick=(index)=>{
       if(onTodoClick) onTodoClick(index)
    }
    
    return (
        <ul className='todo-list'>
            {todos.map((todo,index)=>(
                <li key={todo.id}
                onClick={()=>todoOnClick(index)}
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;