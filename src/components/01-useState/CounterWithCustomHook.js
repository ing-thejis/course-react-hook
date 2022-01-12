import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustomHook = () => {

	const { state, increment, decrement, reset } = useCounter();
	return (
		<div style={{padding: '70px'}}>
			<h1>Counter with useCounter {state}</h1>

			<button className='btn btn-primary' onClick={increment}>+ 1</button>
			<button className='btn btn-primary' onClick={reset}>reset</button>
			<button className='btn btn-primary' onClick={decrement}>- 1</button>
		</div> 
	)
}

export default CounterWithCustomHook