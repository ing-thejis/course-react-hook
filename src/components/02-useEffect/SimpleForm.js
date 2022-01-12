import { useState, useEffect } from 'react'
import Message from './Message'

const SimpleForm = () => {

	const [formState, setFormState] = useState({
		name: '',
		email: ''
	})

	const { name, email } = formState;

	useEffect(() => {
		//console.log('efect - cambio en el name')
	}, [name]);

	useEffect(() => {
		//console.log('efect - cambio en el email')
	}, [email]);

	const handleInputChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div style={{padding: '70px'}}>
			<h1>useEffect - Simple Form</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					autoComplete="off"
					placeholder="nombre"
					value={ name }
					onChange={ handleInputChange }
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control"
					autoComplete="off"
					placeholder="correo@test.com"
					value={ email }
					onChange={ handleInputChange }
				/>
			</div>	

			{ ( name === '123' ) && <Message />}		
		</div>
	)
}

export default SimpleForm