import React from 'react'

const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
	return (
		<li key={todo.id} className="list-group-item">
			<p onClick={()=>handleToggle(todo.id)} className={`${todo.done && 'complete'}`}>{index+1}. {todo.desc}</p>
			<button onClick={()=>handleDelete(todo.id)} className="btn btn-danger">Borrar</button>
		</li>
	)
}

export default TodoListItem