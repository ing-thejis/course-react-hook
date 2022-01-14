/*
useForm es un custom hook,

arg-input: un objeto con cada una de las propiedades del form

return: values del form y una funcion handleInputChange
*/
import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

	const [values, setValues] = useState(initialState)

	const reset = () => {
		setValues(initialState)
	}

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	return [
		values,
		handleInputChange,
		reset
	]
}
