import { useEffect } from 'react'
import {useForm} from '../../hooks/useForm'

const FormWithCustomHook = () => {

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: ''
	})

	const { name, email, password } = formValues;

	useEffect(() => {
		console.log('email cambio')
	}, [ email ])

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formValues)
	}

	return (
		<form onSubmit={handleSubmit} style={{padding: '70px'}}>
			<h1>useEffect - Form Custom Hook</h1>
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
			<div className="form-group">
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="password"
					value={ password}
					onChange={ handleInputChange }
				/>
			</div>	
			<button type="submit" className="btn btn-primary" >Guardar</button>
		</form>
	)
}

export default FormWithCustomHook;