import { useState, useEffect } from 'react'

const Message = () => {

	const [coors, setCoors] = useState({x: 0, y: 0})

	const mouseMove = (e) => {
			console.log(e.x, e.y)
			setCoors({
				x: e.x,
				y: e.y
			})
	}

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove)

		return () => {
			window.removeEventListener('mousemove', mouseMove)
		};
	}, [])

	return (
		<div>
			<h3>Coor!!!</h3>
			<p>x: {coors.x}, y: {coors.y}</p>
		</div>
	)
}

export default Message