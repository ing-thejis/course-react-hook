import React, {useContext} from 'react'
import {UserContext} from './UserContext'

/*Nota: el logout en un about no es correcto
esto fue hecho como parte del curso para explicar el uso 
del useContext e introducir temas que se veran en un futuro
*/
const AboutScreen = () => {

	const {user, setUser} = useContext(UserContext)

	const handleClick = () => {
		setUser({})
	}

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr />

			<pre>
				{JSON.stringify( user, null, 4)}
			</pre>

			<button onClick={handleClick} className="btn btn-danger">Logout</button>
		</div>
	)
}

export default AboutScreen