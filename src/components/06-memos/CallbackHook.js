import React, { useState, useCallback } from 'react'
import {ShowIncrement} from './ShowIncrement'

const CallbackHook = () => {

	const [counter, setCounter] = useState(0)

	// const increment = () => {
	// 	setCounter(counter+1)
	// }

	const increment = useCallback((num) => {
		setCounter(c => c+num)
	}, [setCounter])

	return (
		<div style={{padding: '70px'}}>
			<h1>useCallback hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={increment}/>
		</div>
	)
}

export default CallbackHook