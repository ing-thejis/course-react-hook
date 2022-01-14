import React from 'react'
import PropTypes from 'prop-types'
import {useForm} from '../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {

	const [ { description }, handleInputChange, reset ] = useForm({description: ''})

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1){
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		}

		

		handleAddTodo(newTodo);
		reset();
	}

	return (
		<>
			<h4>Formulario</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					name="description"
					placeholder="Todo..."
					autoComplete="off"
					value={description}
					onChange={handleInputChange}
				/>
				<button className="btn btn-outline-primary w-100 mt-1">Agregar</button>
			</form>
		</>
	)
}

TodoAdd.propTypes = {
	handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd