import { useState } from 'react'

const useCounter = (initialState = 0) => {

	const [counter, setCounter] = useState(initialState)

	const increment = () => {
		setCounter( counter + 1 );
	}

	const reset = () => {
		setCounter( initialState );
	}

	const decrement = () => {
		setCounter( counter - 1 );
	}

	return {
		counter,
		increment,
		decrement,
		reset
	}
}

export default useCounter