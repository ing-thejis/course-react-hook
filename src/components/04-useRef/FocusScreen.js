import React, { useRef } from 'react'

const FocusScreen = () => {

	const refInput = useRef()

	const handleClick = () => {
		//document.querySelector('input').select()
		refInput.current.select()
	}

	return (
		<div style={{padding: '70px'}}>
			<h1>Focus Screen</h1>
			<hr />
		
			<input ref={refInput} className="form-control" placeholder="texto" />

			<button 
				className="btn btn-primary mt-2"
				onClick={handleClick}
			>
				Focus
			</button>
		
		</div>
	)
}

export default FocusScreen